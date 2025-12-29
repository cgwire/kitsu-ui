<template>
  <div :class="{
    field: withMargin,
    'is-inline': isInline,
    'combobox-field': true
  }">
    <label class="label" v-if="label.length > 0">
      {{ label }}
    </label>
    <span class="select">
      <select
        :class="{
          combobox: true,
          thin: thin,
          'select-input': true,
          error: error
        }"
        :style="{
          width: width ? width + 'px' : undefined
        }"
        ref="select"
        :disabled="disabled"
        @keyup.enter="emitEnter()"
        @change="updateValue"
      >
        <option
          :key="`${i}-${option.label}-${option.value}`"
          :value="option.label || option.value"
          :selected="value === option.value"
          v-for="(option, i) in options"
        >
          {{ getOptionLabel(option) }}
        </option>
      </select>
    </span>
  </div>
</template>

<script>
export default {
  name: 'combobox',

  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    error: {
      default: false,
      type: Boolean
    },
    isInline: {
      default: false,
      type: Boolean
    },
    label: {
      default: '',
      type: String
    },
    localeKeyPrefix: {
      default: '',
      type: String
    },
    options: {
      default: () => [],
      type: Array
    },
    value: {
      default: '',
      type: [Object, String, Boolean, Number]
    },
    thin: {
      default: false,
      type: Boolean
    },
    width: {
      type: Number
    },
    withMargin: {
      default: true,
      type: Boolean
    }
  },

  computed: {},

  methods: {
    updateValue() {
      let value = this.$refs.select.value
      this.options.forEach(option => {
        if (option.label === value) {
          value = option.value
        }
      })
      this.$emit('input', value)
    },

    emitEnter() {
      let value = this.$refs.select.value
      this.options.forEach(option => {
        if (option.label === value) {
          value = option.value
        }
      })
      this.$emit('enter', value)
    },

    getOptionLabel(option) {
      if (this.localeKeyPrefix.length > 0) {
        return this.$t(this.localeKeyPrefix + option.label.toLowerCase())
      } else {
        return option.label
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.combobox-field {
  position: relative;
  display: flex;
  flex-direction: column;
}

.select {
  height: auto;
  position: relative;
}

.error {
  border-color: var(--red);
}

.control {
  margin: 0;
}
</style>
