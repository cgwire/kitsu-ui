import ButtonSimple from './components/widgets/ButtonSimple.vue'
import ColorField from './components/widgets/ColorField.vue'
import Combobox from './components/widgets/Combobox.vue'
import ComboboxStyled from './components/widgets/ComboboxStyled.vue'
import DataTable from './components/widgets/DataTable.vue'
import ProductionName from './components/widgets/ProductionName.vue'
import SearchField from './components/widgets/SearchField.vue'
import SearchQueryList from './components/widgets/SearchQueryList.vue'
import TabsRoute from './components/widgets/TabsRoute.vue'
import TextField from './components/widgets/TextField.vue'

import * as productions from './libs/productions'
import * as sorting from './libs/sorting'
import * as string from './libs/string'

const modules = {
 components: {
    widgets: {
      ButtonSimple,
      ColorField,
      Combobox,
      ComboboxStyled,
      DataTable,
      ProductionName,
      SearchField,
      SearchQueryList,
      TabsRoute,
      TextField
    },
    modals: {
    }
  },
  libs: {
    productions,
    sorting,
    string
  }
}

export default modules
