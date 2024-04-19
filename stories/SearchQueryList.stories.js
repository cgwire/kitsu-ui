import kitsuUi from '../index'
const { SearchQueryList } = kitsuUi.components.widgets

export default {
  title: 'Widgets/SearchQueryList',
  component: SearchQueryList,
  tags: ['autodocs']
}

export const Basic = {
  args: {
    type: 'asset',
    queries: [
      { name: 'wip' },
      { name: 'complete' },
      { name: 'late rigs' },
    ],
  },
}

export const Empty = {
  args: {
    type: 'asset',
    queries: [
    ],
  },
}

export const WithGroups = {
  args: {
    type: 'asset',
    isGroupEnabled: true,
    queries: [
    ],
    groups: [
    ],
  },
}

