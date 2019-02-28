import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// exmaples
import ExmapleTemplate from '@/components/exmaples/Template'
// exmaples > elements
import Button from '@/components/exmaples/Elements/Button'
import Container from '@/components/exmaples/Elements/Container'

// exmaples > collections
import Breadcrumb from '@/components/exmaples/Collections/Breadcrumb'
import Form from '@/components/exmaples/Collections/Form'
import Grid from '@/components/exmaples/Collections/Grid'

// exmaples > views
import Card from '@/components/exmaples/Views/Card'

// exmaples > charts
import Circle from '@/components/exmaples/Charts/Circle'

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
      path: '/exmaples',
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
