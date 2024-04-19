import kitsuUi from '../index'
const { ProductionName } = kitsuUi.components.widgets

export default {
  title: 'Widgets/ProductionName',
  component: ProductionName,
  tags: ['autodocs']
}

export const Basic = {
  args: {
    production: {
      id: 'production-id',
      name: 'Production Name',
      fps: 25,
      has_avatar: false,
      resolution: '1920x1080',
      ratio: '16:9',
    }
  }
}
