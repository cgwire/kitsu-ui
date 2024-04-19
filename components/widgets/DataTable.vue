<template>
  <table class="data-table">
    <thead>
      <tr>
        <th
          :class="header.class || ''"
          v-for="header in headers"
        >
          {{ header.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="" v-for="item in items">
        <slot name="item" v-bind="item"></slot>
      </tr>
    </tbody>
  </table>
  <div class="data-table-footer">
    <slot name="footer">footer</slot>
  </div>
</template>

<script>
export default {
  name: 'data-table',

  data() {
    return {}
  },

  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
table.data-table {
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: auto;
  width: 100%;
  thead {
    th {
      color: #999;
      font-size: 0.85em;
      font-weight: bold;
      text-align: left;
      text-transform: uppercase;
    }
  }

  tbody {
    td {
      border: 1px solid #ddd;
      padding: 0.5em 0.5em;
    }
    tr {
      border: 1px solid #ddd;

      &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
}

.data-table-footer {
  margin-top: 1em;
  text-align: center;
  font-size: 0.9em;
  font-style: italic;
}
</style>
