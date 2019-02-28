<template>
  <div>
    <sui-sidebar class="inverted top visible">
    </sui-sidebar>
    <sidebar :menus="menus"></sidebar>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
import Sidebar from '@/components/common/Sidebar'

export default {
  name: 'Exmaple-Template',
  data: function () {
    return {
      menus: [
        {
          header: 'Elements',
          items: [
            { label: 'Button', path: '/exmaples/Button' },
            { label: 'Container', path: '/exmaples/Container' },
            { label: 'Divider', path: '/exmaples/Divider' },
            { label: 'Flag', path: '/exmaples/Flag' },
            { label: 'Header', path: '/exmaples/Header' },
            { label: 'Icon', path: '/exmaples/Icon' },
            { label: 'Image', path: '/exmaples/Image' },
            { label: 'Input', path: '/exmaples/Input' },
            { label: 'Label', path: '/exmaples/Label' },
            { label: 'List', path: '/exmaples/List' },
            { label: 'Loader', path: '/exmaples/Loader' },
            { label: 'Rail', path: '/exmaples/Rail' },
            { label: 'Reveral', path: '/exmaples/Reveral' },
            { label: 'Segment', path: '/exmaples/Segment' },
            { label: 'Step', path: '/exmaples/Step' }
          ]
        },
        {
          header: 'Collections',
          items: [
            { label: 'Breadcrumb', path: '/exmaples/Breadcrumb' },
            { label: 'Form', path: '/exmaples/Form' },
            { label: 'Grid', path: '/exmaples/Grid' },
            { label: 'Menu', path: '/exmaples/Menu' },
            { label: 'Message', path: '/exmaples/Message' },
            { label: 'Table', path: '/exmaples/Table' }
          ]
        },
        {
          header: 'Views',
          items: [
            { label: 'Card', path: '/exmaples/Card' },
            { label: 'Comment', path: '/exmaples/Comment' },
            { label: 'Feed', path: '/exmaples/Feed' },
            { label: 'Item', path: '/exmaples/Item' },
            { label: 'Statistic', path: '/exmaples/Statistic' }
          ]
        },
        {
          header: 'Modules',
          items: [
            { label: 'Accordion', path: '/exmaples/Accordion' },
            { label: 'Checkbox', path: '/exmaples/Checkbox' },
            { label: 'Dimmer', path: '/exmaples/Dimmer' },
            { label: 'Dropdown', path: '/exmaples/Dropdown' },
            { label: 'Embed', path: '/exmaples/Embed' },
            { label: 'Modal', path: '/exmaples/Modal' },
            { label: 'Rating', path: '/exmaples/Rating' },
            { label: 'Sidebar', path: '/exmaples/Sidebar' },
            { label: 'Popup', path: '/exmaples/Popup' },
            { label: 'Progress', path: '/exmaples/Progress' },
            { label: 'Tab', path: '/exmaples/Tab' }
          ]
        },
        {
          header: 'Charts',
          items: [
            { label: 'Circle', path: '/exmaples/Circle' }
          ]
        }
      ]
    }
  },
  components: {
    sidebar: Sidebar
  }
}
</script>
