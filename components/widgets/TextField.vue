<template>
  <div class="field" :class="{ 'is-inline': isInline }">
    <label class="label" v-if="label">{{ label }}</label>
    <label class="label empty-label" v-if="emptyLabel">A</label>
    <p
      class="control"
      :class="{
        'is-inline': isInline,
        flexrow: !isInline
      }"
    >
      <input
        ref="input"
        :class="
          errored
            ? 'input flexrow-item errored' + inputClass
            : 'input flexrow-item' + inputClass
        "
        :placeholder="placeholder"
        :type="type"
        :value="value"
        :disabled="disabled"
        :maxlength="maxlength"
        :min="min"
        :max="max || undefined"
        :required="required"
        :step="step || 'any'"
        :readonly="readonly"
        @input="updateValue()"
        @keyup.enter="emitEnter()"
      />
      <button
        class="button flexrow-item"
        @click="emitEnter()"
        v-if="buttonLabel"
      >
        {{ buttonLabel }}
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'text-field',
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    label: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: [String, Number]
    },
    placeholder: {
      default: '',
      type: String
    },
    type: {
      default: 'text',
      type: String
    },
    inputClass: {
      default: '',
      type: String
    },
    buttonLabel: {
      default: '',
      type: String
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      type: Number
    },
    maxlength: {
      default: 524288,
      type: Number
    },
    step: {
      type: Number
    },
    isInline: {
      default: false,
      type: Boolean
    },
    errored: {
      default: false,
      type: Boolean
    },
    emptyLabel: {
      default: false,
      type: Boolean
    },
    readonly: {
      default: false,
      type: Boolean
    },
    required: {
      default: false,
      type: Boolean
    }
  },

  methods: {
    getInputValue() {
      const input = this.$refs.input
      if (this.type === 'number') {
        return !isNaN(input.valueAsNumber) ? input.valueAsNumber : null
      } else {
        return input.value
      }
    },

    emitEnter() {
      this.$emit('enter', this.getInputValue())
    },

    updateValue() {
      this.$emit('input', this.getInputValue())
    },

    focus() {
      this.$refs.input.focus()
    }
  }
}
</script>
<style lang="scss" scoped>
.input {
  background-color: var(--background);
  border-radius: 10px;
  border: 1px solid var(--border);
  box-shadow: none;
  color: var(--text);
  height: 3rem;
  font-size: 1.2rem;
  padding: 0.2rem 1rem;
  width: 100%;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: var(--border-hover);
  }

  &:active,
  &:focus {
    border-color: var(--green);
  }

  &::placeholder {
    color: var(--placeholder);
  }
}


.control {
  margin: 0.2em;
}

.input.is-size-2 {
  width: 3rem;
}

.input.is-size-3 {
  width: 3.5rem;
}

.input.is-size-4 {
  width: 5rem;
}

.input.is-small {
  height: 2rem;
  font-size: 1rem;
  padding: 0 0.5rem;
}

input.input {
  font-size: 1.2em;
  border-radius: 10px;
}
input.input.thin {
  height: 2.4em;
}

.flexrow-item {
  margin: 0;
}

button {
  font-size: 1.2em;
}

.input:invalid,
.input.errored {
  border-color: var(--red);
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}

.empty-label {
  opacity: 0;
}
</style>
