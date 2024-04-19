import kitsuui from '../index'
const { SearchField } = kitsuui.components.widgets

export default {
  title: 'Widgets/SearchField',
  component: SearchField,
  tags: ['autodocs']
}

export const Basic = {
  args: {
    placeholder: 'Search for tasks',
    canSave: true
  },
}

export const NoSave = {
  args: {
    placeholder: 'Search for tasks',
    canSave: false
  },
}
