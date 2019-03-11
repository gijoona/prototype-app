<template>
  <sui-container>
    <sui-header size="huge">Types</sui-header>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Card
            <sui-header-subheader>
              A single Card
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-image src="/static/images/avatar/large/kristy.png" />
            <sui-card-content>
              <sui-card-header>Kristy</sui-card-header>
              <sui-card-meta>Joined in 2019</sui-card-meta>
              <sui-card-description>
                Kristy in an art director living in New York.
              </sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="uesr" /> 22 Friends
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-card>
            <sui-card-content>
              <sui-image src="/static/images/avatar/small/elliot.jpg" shape="circular" size="mini" />
              Elliot
              <sui-card-meta slot="right">14h</sui-card-meta>
            </sui-card-content>
            <sui-image src="/static/images/wireframes/image.png" />
            <sui-card-content>
              <span slot="right">
                <sui-icon name="heart outline" /> 17 likes
              </span>
              <sui-icon name="comment" /> 3 comments
            </sui-card-content>
            <sui-card-content extra>
              <sui-input
                placeholder="Add Comment"
                icon="heart outline"
                icon-position="left"
                transparent
              />
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
</template>
<script>
export default {
  name: 'Card',
  data: function () {
    return {}
  }
}
</script>
