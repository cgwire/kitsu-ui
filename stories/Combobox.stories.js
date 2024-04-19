import kitsuUi from '../index'
const { Combobox } = kitsuUi.components.widgets

export default {
  title: 'Widgets/Combobox',
  component: Combobox,
  tags: ['autodocs']
}

export const Basic = {
  args: {
    label: 'Basic',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
}

export const NoLabel = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
}
