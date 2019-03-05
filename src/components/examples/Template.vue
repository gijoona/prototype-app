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
            { label: 'Button', path: '/examples/Button' },
            { label: 'Container', path: '/examples/Container' },
            { label: 'Divider', path: '/examples/Divider' },
            { label: 'Flag', path: '/examples/Flag' },
            { label: 'Header', path: '/examples/Header' },
            { label: 'Icon', path: '/examples/Icon' },
            { label: 'Image', path: '/examples/Image' },
            { label: 'Input', path: '/examples/Input' },
            { label: 'Label', path: '/examples/Label' },
            { label: 'List', path: '/examples/List' },
            { label: 'Loader', path: '/examples/Loader' },
            { label: 'Rail', path: '/examples/Rail' },
            { label: 'Reveral', path: '/examples/Reveral' },
            { label: 'Segment', path: '/examples/Segment' },
            { label: 'Step', path: '/examples/Step' }
          ]
        },
        {
          header: 'Collections',
          items: [
            { label: 'Breadcrumb', path: '/examples/Breadcrumb' },
            { label: 'Form', path: '/examples/Form' },
            { label: 'Grid', path: '/examples/Grid' },
            { label: 'Menu', path: '/examples/Menu' },
            { label: 'Message', path: '/examples/Message' },
            { label: 'Table', path: '/examples/Table' }
          ]
        },
        {
          header: 'Views',
          items: [
            { label: 'Card', path: '/examples/Card' },
            { label: 'Comment', path: '/examples/Comment' },
            { label: 'Feed', path: '/examples/Feed' },
            { label: 'Item', path: '/examples/Item' },
            { label: 'Statistic', path: '/examples/Statistic' }
          ]
        },
        {
          header: 'Modules',
          items: [
            { label: 'Accordion', path: '/examples/Accordion' },
            { label: 'Checkbox', path: '/examples/Checkbox' },
            { label: 'Dimmer', path: '/examples/Dimmer' },
            { label: 'Dropdown', path: '/examples/Dropdown' },
            { label: 'Embed', path: '/examples/Embed' },
            { label: 'Modal', path: '/examples/Modal' },
            { label: 'Rating', path: '/examples/Rating' },
            { label: 'Sidebar', path: '/examples/Sidebar' },
            { label: 'Popup', path: '/examples/Popup' },
            { label: 'Progress', path: '/examples/Progress' },
            { label: 'Tab', path: '/examples/Tab' }
          ]
        },
        {
          header: 'Charts',
          items: [
            { label: 'Circle', path: '/examples/Circle' }
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
