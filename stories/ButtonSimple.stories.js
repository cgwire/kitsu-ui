import kitsuui from '../index';

export default {
  title: 'Widgets/ButtonSimple',
  component: kitsuui.components.widgets.ButtonSimple,
  tags: ['autodocs']
};

export const Basic = {
  args: {
    text: 'confirm',
    title: 'confirm button'
  },
}

export const WithIcon = {
  args: {
    text: 'confirm',
    icon: 'download'
  },
}

export const Primary = {
  args: {
    isPrimary: true,
    text: 'confirm',
  },
}

export const Loading = {
  args: {
    text: 'confirm',
    isLoading: true,
  },
}

export const On = {
  args: {
    text: 'confirm',
    isOn: true,
  },
}

export const Small = {
  args: {
    text: 'confirm',
    isSmall: true,
  },
}
