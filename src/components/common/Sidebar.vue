<template>
  <!--
  == sidebar options ==
  animation: Enum(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),
  direction: Enum(['top', 'right', 'bottom', 'left'], { default: 'left' }),
  visible: Boolean,
  width: Enum(['very thin', 'thin', 'wide', 'very wide'])
  -->
  <sui-sidebar class="inverted left visible">
    <div class="item" v-for="menu in menus" :key="menu.header">
      <div class="header">
        {{ menu.header }}
      </div>
      <div class="menu">
        <a class="item" v-for="item in menu.items" :key="item.label" @click="movePage(item)">
          {{ item.label }}
        </a>
      </div>
    </div>
  </sui-sidebar>
</template>
<script>
export default {
  name: 'Sidebar',
  props: ['menus'],
  data: function () {
    return {}
  },
  methods: {
    movePage: function (item) {
      this.$router.push({ path: item.path })
    }
  }
}
</script>
