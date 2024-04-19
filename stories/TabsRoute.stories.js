import kitsuui from '../index'
const { TabsRoute } = kitsuui.components.widgets

export default {
  title: 'Nav/TabsRoutes',
  component: TabsRoute,
  tags: ['autodocs']
}

export const Basic = {
  args: {
    activeTab: 'tab1',
    routeName: 'section',
    tabs: [
      {
        name: 'tab1',
        label: 'Tab 1',
      },
      {
        name: 'tab2',
        label: 'Tab 2',
      },
      {
        name: 'tab3',
        label: 'Tab 3',
      }
    ]
  },
}
