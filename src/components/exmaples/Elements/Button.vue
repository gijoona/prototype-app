<template>
  <sui-container>
    <sui-header size="huge">Types</sui-header>
    <div>
      <sui-header size="large">Button
        <sui-header-subheader>
          A standard button
        </sui-header-subheader>
      </sui-header>
      <div>
        <sui-button>Click Here</sui-button>
        <sui-button content="Content as a prop" />
        <div is="sui-button">This is a div</div>
      </div>
    </div>
    <div>
      <sui-header size="large">Emphasis
        <sui-header-subheader>
          A button can be formatted to show different levels of emphasis
        </sui-header-subheader>
      </sui-header>
      <div>
        <sui-button primary>Primary</sui-button>
        <sui-button secondary>Secondary</sui-button>
      </div>
    </div>
    <div>
      <sui-header size="large">Animated
        <sui-header-subheader>
          A button can animate to show hidden content
        </sui-header-subheader>
      </sui-header>
      <sui-button animated>
        <sui-button-content visible>Next</sui-button-content>
        <sui-button-content hidden>
          <sui-icon name="right arrow" />
        </sui-button-content>
      </sui-button>

      <sui-button animated="vertical">
        <sui-button-content visible>Shop</sui-button-content>
        <sui-button-content hidden>
          <sui-icon name="shop"/>
        </sui-button-content>
      </sui-button>

      <sui-button animated="fade">
        <sui-button-content visible>Sign-up for a Pro account</sui-button-content>
        <sui-button-content hidden>$12.99 a month</sui-button-content>
      </sui-button>
    </div>
    <div>
      <sui-header size="large">Labeled
        <sui-header-subheader>
          A button can appear alongside a label
        </sui-header-subheader>
      </sui-header>
      <sui-button conent="Like" icon="heart">
        <a is="sui-label" slot="label" basic>2,048</a>
      </sui-button>

      <sui-button content="Like" icon="heart" label-position="left">
        <a is="sui-label" slot="label" basic pointing="right">2,048</a>
      </sui-button>

      <sui-button icon="fork" label-position="left">
        <a is="sui-label" slot="label" basic>1,048</a>
      </sui-button>

      <sui-button color="red" icon="heart" content="Like">
        <a is="sui-label" slot="label" color="red" pointing="left" basic>2,048</a>
      </sui-button>

      <sui-button color="blue" icon="fork" content="Fork" basic>
        <a is="sui-label" slot="label" color="blue">1,048</a>
      </sui-button>
    </div>
  </sui-container>
</template>

<script>
export default {
  name: 'Button',
  data: function () {
    return {
      msg: 'Button'
    }
  }
}
</script>
