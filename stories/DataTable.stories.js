import kitsuui from '../index'
const { DataTable } = kitsuui.components.widgets

export default {
  title: 'Data/DataTable',
  component: DataTable,
  tags: ['autodocs']
}

export const Basic = {
  args: {
    headers: [
      {
        label: 'Name',
        type: 'sticky',
      },
      {
        label: 'Type',
        type: 'standard',
      },
      {
        label: 'Entity',
        type: 'standard',
      }
    ]
  },
}
