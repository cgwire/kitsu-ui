/**
 * Creates a compare function from a property name, unary function, or binary function.
 * Supports descending order and custom comparison functions.
 */
function makeCompareFunction(func, options) {
  const opt = typeof options === "object" ? options : { direction: options };

  // If func is not a function, treat it as a property name
  if (typeof func !== "function") {
    const prop = func;
    func = (v1) => (v1[prop] ? v1[prop] : "");
  }

  // If func is a unary function (takes one argument), convert it to a binary compare function
  if (func.length === 1) {
    const unaryFunc = func;
    const preprocess = opt.ignoreCase
      ? (v) => (typeof v === "string" ? v.toLowerCase() : v)
      : (v) => v;
    const compare = opt.cmp || ((v1, v2) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0));
    func = (v1, v2) =>
      compare(preprocess(unaryFunc(v1)), preprocess(unaryFunc(v2)));
  }

  // Handle descending order
  const descTokens = { "-1": "", desc: "" };
  if (opt.direction in descTokens) {
    return (v1, v2) => -func(v1, v2);
  }

  return func;
}

/**
 * Creates a chained comparison function.
 * Adds a secondary compare function that is applied when the first returns 0 (equal).
 * Returns a new compare function with a `thenBy` method for further chaining.
 */
function thenBy(func, options) {
  // Check if this is being called as a method on an existing compare function
  const previousCompare =
    typeof this === "function" && !this.firstBy ? this : false;
  const currentCompare = makeCompareFunction(func, options);

  // If there's a previous compare function, chain them together
  const compareFunc = previousCompare
    ? (a, b) => previousCompare(a, b) || currentCompare(a, b)
    : currentCompare;

  // Add thenBy method for chaining
  compareFunc.thenBy = thenBy;
  return compareFunc;
}

// Set firstBy property for ES6 module compatibility
thenBy.firstBy = thenBy;

export default thenBy;
