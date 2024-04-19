<template>
  <div class="search-field-wrapper" ref="wrapper" @click="focus">
    <div class="flexrow-item">
      <search-icon class="search-icon" />
    </div>

    <div class="flexrow-item search-field">
      <input
        ref="input"
        class="search-input"
        :placeholder="placeholder"
        type="text"
        @input="onSearchChange"
        @keyup.enter="onEnterPressed"
        @focus="setFocusedStyle"
        @blur="unsetFocusedStyle"
        v-focus="focusOptions"
      />
    </div>

    <div class="flexrow-item erase-search">
      <span class="tag" @click="clearSearch"> x </span>
    </div>

    <div class="flexrow-item save-search" v-if="canSave">
      <button class="button save-button" @click="onSaveClicked">
        <save-icon class="icon is-small only-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SaveIcon, SearchIcon } from 'lucide-vue-next'

const emit = defineEmits(['change', 'enter', 'save'])

const name = 'search-field'
const input = ref(null)
const wrapper = ref(null)

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  canSave: {
    type: Boolean,
    default: false
  },
  focusOptions: {
    type: Object
  }
})

const onSearchChange = () => {
  emit('change', input.value.value)
}

const onEnterPressed = () => {
  emit('enter', input.value.value)
}

const onSaveClicked = () => {
  const value = input.value.value.trim()
  if (value.length > 0 && props.canSave) {
    emit('save', value)
  }
}

const getValue = () => {
  return input.value ? input.value.value : ''
}

const setValue = (value) => {
  if (input) {
    input.value.value = value
  }
}

const focus = (options) => {
  if (input && input.focus) {
    input.focus(options)
  }
  if (input && input.value && input.value.focus) {
    input.value.focus(options)
  }
}

const clearSearch = () => {
  console.log('clearing search')
  setValue('')
  onSearchChange()
}

const setFocusedStyle = () => {
  wrapper.value.className = 'search-field-wrapper focused'
}

const unsetFocusedStyle = () => {
  wrapper.value.className = 'search-field-wrapper'
}
</script>

<style lang="scss" scoped>
.search-icon {
  color: var(--text);
  margin-left: .5em;
  margin-right: .5em;
  margin-top: 5px;
  width: 20px;
}

.search-field {
  margin-right: 0.2em;
  flex: 1;
}

.search-input {
  width: 300px;
  background: inherit;
  border: 0;
  color: var(--text);

  &:focus {
    outline: none;
  }
}

.search-input::placeholder {
  color: var(--placeholder);
}

.erase-search {
  cursor: pointer;
  margin: 0;
  padding: 0;
  margin-right: .5em;
}

.save-search {
  margin-right: .9em;
  margin-top: 3px;

  .icon {
    width: 16px;
  }
}

.save-search .button {
  margin-left: 0.5em;
  border: 0;
  color: #666;
  padding-right: 0;
}

.save-search .button:hover {
  cursor: pointer;
  color: #999;
}

.button.save-button {
  background: transparent;
}

.search-field-wrapper {
  align-items: center;
  border: 1px solid var(--border-alt);
  border-radius: 2em;
  cursor: text;
  display: flex;
  padding: 0.3em .5em;
  margin-right: 1em;
  position: relative;
  transition:
    border 0.5s ease-in-out,
    box-shadow 0.5s ease-in-out;

  &.focused {
    border: 1px solid var(--green);
    box-shadow: 0 0 4px 3px var(--box-shadow);
  }
}

.search-field-wrapper:focus,
.search-field-wrapper:hover {
  border-color: var(--green);
}

@media screen and (max-width: 768px) {
  .search-input {
    width: 200px;
  }
}
</style>
