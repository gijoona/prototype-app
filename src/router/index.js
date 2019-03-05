import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// examples
import ExmapleTemplate from '@/components/examples/Template'
// examples > elements
import Button from '@/components/examples/Elements/Button'
import Container from '@/components/examples/Elements/Container'

// examples > collections
import Breadcrumb from '@/components/examples/Collections/Breadcrumb'
import Form from '@/components/examples/Collections/Form'
import Grid from '@/components/examples/Collections/Grid'

// examples > views
import Card from '@/components/examples/Views/Card'

// examples > charts
import Circle from '@/components/examples/Charts/Circle'

// semantic-ui-vue
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

Vue.use(Router)
Vue.use(SuiVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/examples',
      component: ExmapleTemplate,
      children: [
        // Elements
        { path: 'Button', name: 'Button', component: Button },
        { path: 'Container', name: 'Container', component: Container },
        // Collections
        { path: 'Breadcrumb', name: 'Breadcrumb', component: Breadcrumb },
        { path: 'Form', name: 'Form', component: Form },
        { path: 'Grid', name: 'Grid', component: Grid },
        // Views
        { path: 'Card', name: 'Card', component: Card },
        // Charts
        { path: 'Circle', name: 'Circle', component: Circle }
      ]
    }
  ]
})
