<template>
  <sui-container>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column>
          <sui-header>Charts
            <sui-header-subheader>
              Circle
            </sui-header-subheader>
          </sui-header>
          <svg id="svg" :width="svgwidth" :height="svgheight"></svg>
          <div>
            cx: <input type="number" v-model="cx"/>
            cy: <input type="number" v-model="cy"/>
            r: <input type="number" v-model="r"/>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
</template>
<script>
const d3 = require('d3')
export default {
  name: 'Circle',
  data: function () {
    return {
      'cx': 250,
      'cy': 150,
      'r': 100
    }
  },
  computed: {
    svgwidth: function () {
      return (parseInt(this.cx) + parseInt(this.r)) + 'px'
    },
    svgheight: function () {
      return (parseInt(this.cy) + parseInt(this.r)) + 'px'
    }
  },
  watch: {
    cx: function (val) {
      this.circle.attr('cx', val)
    },
    cy: function (val) {
      this.circle.attr('cy', val)
    },
    r: function (val) {
      this.circle.attr('r', val)
    }
  },
  mounted: function () {
    let svg = d3.select(this.$el).select('svg')
    this.circle = svg
      .append('circle')
      .attr('cx', this.cx)
      .attr('cy', this.cy)
      .attr('r', this.r)
  }
}
</script>
