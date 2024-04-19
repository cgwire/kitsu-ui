<template>
  <div class="tabs">
    <ul>
      <li
        :key="'task-type-tab-' + tab.name"
        :class="{ 'is-active': tab.name === activeTab }"
        @click="$emit('tab-change', tab.name)"
        v-for="tab in tabs"
      >
        <router-link
          :to="routeName.charAt(0) === '/'
            ? routeName + '?tab=' + tab.name
            : {
              name: routeName,
              query: { tab: tab.name }
            }
          "
        >
          {{ tab.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabs-route',

  data() {
    return {}
  },

  props: {
    activeTab: {
      type: String,
      default: ''
    },
    isNamedRoute: {
      type: Boolean,
      default: false
    },
    routeName: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  flex-direction: row;
  color: var(--text);
}

.tabs ul {
  border-bottom: 1px solid var(--border-alt);
  padding-bottom: 9px;
  display: flex;
  list-style: none;
  margin-left: 0;
  margin-right: 0;
}

.tabs li {
  a,
  router-link {
    border-bottom: 1px solid var(--border-alt);
    cursor: pointer;
    padding: 10px 1em;
  }

  &.is-active a,
  &.is-active router-link {
    border-bottom: 1px solid var(--green);
    color: #00b242;
  }
}
</style>
