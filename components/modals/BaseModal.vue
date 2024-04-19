<template>
  <div
    :class="{
      modal: true,
      'is-active': active
    }"
  >
    <div class="modal-background" @click="$emit('cancel')"></div>

    <div class="modal-content">
      <div class="box">
        <h1 class="title">
          {{ title }}
        </h1>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Modal used to edit search filter information. Users prefer to rename the
   filter label when it's too complex to read or too long.
 */
import { modalMixin } from './base_modal'

export default {
  name: 'base-modal',
  mixins: [modalMixin],
  components: {
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
    }
  },

  methods: {
  },

  watch: {
  }
}
</script>

<style scoped>
.modal {
  display: none;

  .is-active {
    display: flex;
  }
}
</style>
