<template>
  <base-modal
    :active="active"
    :title="title"
  >
    <form v-on:submit.prevent>
      <text-field
        ref="nameField"
        :label="$t('assets.fields.name')"
        v-model.trim="form.name"
        @enter="runConfirmation"
        v-focus
      />
      <color-field
        ref="colorField"
        :label="$t('main.color')"
        v-model="form.color"
      />
    </form>

    <modal-footer
      :error-text="$t('main.filter_group_error')"
      :is-error="isError"
      :is-loading="isLoading"
      @confirm="runConfirmation"
      @cancel="$emit('cancel')"
    />
  </base-modal>
</template>

<script>
/*
 * Modal used to edit filter group information.
 */
import { modalMixin } from './base_modal'
import BaseModal from './BaseModal.vue'
import ModalFooter from './ModalFooter.vue'
import ColorField from '../widgets/ColorField.vue'
import TextField from '../widgets/TextField.vue'

export default {
  name: 'edit-search-filter-group-modal',
  mixins: [modalMixin],
  components: {
    BaseModal,
    ColorField,
    ModalFooter,
    TextField
  },

  props: {
    active: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    groupToEdit: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      form: {
        color: '',
        name: ''
      }
    }
  },

  computed: {
    title() {
      if (this.groupToEdit.id) {
        return `${this.$t('main.filter_group_edit')} ${this.groupToEdit.name}`
      } else {
         return this.$t('main.filter_group_add')
      }
    }
  },

  methods: {
    runConfirmation(event) {
      if (!this.form.name.length) {
        this.$refs.nameField.focus()
        return
      }

      if (!event || event.keyCode === 13 || !event.keyCode) {
        this.$emit('confirm', this.form)
      }
    }
  },

  watch: {
    groupToEdit() {
      const {
        id,
        color = '',
        name = ''
      } = this.groupToEdit?.id ? this.groupToEdit : {}
      this.form = {
        id,
        color,
        name
      }
    },

    active() {
      if (this.active) {
        setTimeout(() => {
          this.$refs.nameField.focus()
        }, 100)
      }
    }
  }
}
</script>
