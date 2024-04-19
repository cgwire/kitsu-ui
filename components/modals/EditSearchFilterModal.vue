<template>
  <base-modal
    :active="active"
    :title="$t('main.search_query_edit')"
  >
    <form v-on:submit.prevent>
      <text-field
        ref="nameField"
        :label="$t('assets.fields.name')"
        v-model.trim="form.name"
        @enter="runConfirmation"
        v-focus
      />

      <text-field
        :label="$t('main.search_query')"
        v-model.trim="form.search_query"
        @enter="runConfirmation"
      />

      <combobox
        :label="$t('main.filter_group')"
        :options="groupOptions"
        v-model="form.search_filter_group_id"
        v-if="isGroupEnabled"
      />
    </form>

    <modal-footer
      :error-text="$t('main.search_query_edit_error')"
      :is-error="isError"
      :is-loading="isLoading"
      @confirm="runConfirmation"
      @cancel="$emit('cancel')"
    />
  </base-modal>
</template>

<script>
/*
 * Modal used to edit search filter information. Users prefer to rename the
   filter label when it's too complex to read or too long.
 */
import BaseModal from './BaseModal.vue'
import ModalFooter from './ModalFooter.vue'
import Combobox from '../widgets/Combobox.vue'
import TextField from '../widgets/TextField.vue'

export default {
  name: 'edit-search-filter-modal',
  components: {
    BaseModal,
    Combobox,
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
    isGroupEnabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    searchQueryToEdit: {
      type: Object,
      default: () => {}
    },
    groupOptions: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      form: {
        id: null,
        name: '',
        search_filter_group_id: null,
        search_query: '',
        task_status_id: null
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
        this.$emit('confirm', {
          id: this.searchQueryToEdit.id,
          ...this.form
        })
      }
    }
  },

  watch: {
    searchQueryToEdit() {
      if (this.searchQueryToEdit?.id) {
        this.form.id = this.searchQueryToEdit.id
        this.form.name = this.searchQueryToEdit.name
        this.form.search_filter_group_id =
          this.searchQueryToEdit.search_filter_group_id
        this.form.search_query = this.searchQueryToEdit.search_query
      } else {
        this.form = {
          id: null,
          name: '',
          search_filter_group_id: null,
          search_query: '',
          task_status_id: null
        }
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
