/*
 * Detect if number are present in the name and generate the next
 * increment. If there is no number, we consider that a new name
 * must be written.
 */
export const generateNextName = (name, padding = 1) => {
  const matches = name.match(/\d+$/)
  if (matches) {
    const number = matches[0]
    const rootName = name.substring(0, name.length - number.length)
    let numberInt = parseInt(number)
    if (numberInt === 1 && padding === 10) numberInt = 10
    else numberInt += padding
    return rootName + String(numberInt).padStart(number.length, '0')
  } else {
    return ''
  }
}

/*
 * Shorten a text to a maximum length and replace new lines with spaces. Add
 * an ellipsis if the text is shortened.
 */
export const shortenText = (text, maxLength) => {
  let result = text || ''
  if (text !== undefined && text.length > maxLength) {
    result = text.slice(0, maxLength) + '...'
    result = result.replace(/\n/g, ' ')
  }

  return result
}


/*
 * Slugify a string by removing special characters and replacing spaces with
 * dashes.
 */
export const slugify = (str) => {
  str = str.replace(/^\s+|\s+$/g, '').toLowerCase()

  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:'
  const to = 'aaaaeeeeiiiioooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  return str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_')
}

/*
 * Capitalize the first letter of a string.
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
