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

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Cards
            <sui-header-subheader>
              A group of cards
            </sui-header-subheader>
          </sui-header>
          <sui-card-group :items-per-row="3">
            <sui-card>
              <sui-card-content>
                <sui-image src="/static/images/avatar/small/elliot.jpg" class="right floated" />
                <sui-card-header>Elliot Fu</sui-card-header>
                <sui-card-meta>Friends of Veronika</sui-card-meta>
                <sui-card-description>
                  Elliot requested permission to view your contact details
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-container text-align="center">
                  <sui-button-group>
                    <sui-button basic positive>Approve</sui-button>
                    <sui-button basic negative>Decline</sui-button>
                  </sui-button-group>
                </sui-container>
              </sui-card-content>
            </sui-card>

            <sui-card>
              <sui-card-content>
                <sui-image src="/static/images/avatar/small/jenny.jpg" class="right floated" />
                <sui-card-header>Jenny Hess</sui-card-header>
                <sui-card-meta>New Member</sui-card-meta>
                <sui-card-description>
                  Jenny wants to add you to the group <b>Best friends</b>
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-container text-align="center">
                  <sui-button-group>
                    <sui-button basic positive>Approve</sui-button>
                    <sui-button basic negative>Decline</sui-button>
                  </sui-button-group>
                </sui-container>
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-card-group :items-per-row="3">
            <sui-card>
              <sui-image src="/static/images/avatar/large/matthew.png" />
              <sui-card-content>
                <sui-card-header>Matt Giampietro</sui-card-header>
                <sui-card-meta>Friends</sui-card-meta>
                <sui-card-description>
                  Matthew is an interior designer living in New York.
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="user" /> 75 Friends
                <span slot="right">Joined in 2013</span>
              </sui-card-content>
            </sui-card>
            <sui-card>
              <sui-image src="/static/images/avatar/large/molly.png" />
              <sui-card-content>
                <sui-card-header>Molly</sui-card-header>
                <sui-card-meta>Coworker</sui-card-meta>
                <sui-card-description>
                  Molly is a personal assistant living in Paris.
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="user" /> 35 Friends
                <span slot="right">Joined in 2011</span>
              </sui-card-content>
            </sui-card>
            <sui-card>
              <sui-image src="/static/images/avatar/large/elyse.png" />
              <sui-card-content>
                <sui-card-header>Elyse</sui-card-header>
                <sui-card-meta>Coworker</sui-card-meta>
                <sui-card-description>
                  Elyse is a copywriter working in New York.
                </sui-card-description>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="user" /> 151 Friends
                <span slot="right">Joined in 2014</span>
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>

    <sui-header size="huge">Content</sui-header>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Content Block
            <sui-header-subheader>
              A card can contain blocks of content
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Project Timeline</sui-card-header>
            </sui-card-content>
            <sui-card-content>
              <sui-card-header size="tiny">ACTIVITY</sui-card-header>
              <!--
                sui-feed is not available yet, therefore base semantic ui has been substituted for now
              -->
              <div class="ui small feed">
                <div class="event">
                  <div class="content">
                    <div class="summary">
                      <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
                    </div>
                  </div>
                </div>
                <div class="event">
                  <div class="content">
                    <div class="summary">
                      <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
                    </div>
                  </div>
                </div>
                <div class="event">
                  <div class="content">
                    <div class="summary">
                      <a>Helen Troy</a> added two pictures
                    </div>
                  </div>
                </div>
              </div>
            </sui-card-content>
            <sui-card-content extra>
              <sui-button>Join Project</sui-button>
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Image
            <sui-header-subheader>
              A card can contain an image
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-reveal animated="move">
              <sui-reveal-content visible>
                <sui-image src="/static/images/avatar/large/jenny.jpg" />
              </sui-reveal-content>
              <sui-reveal-content hidden>
                <sui-image src="/static/images/avatar/large/elliot.jpg" />
              </sui-reveal-content>
            </sui-reveal>
            <sui-card-content>
              <sui-card-header>Team Fu &amp; Hess</sui-card-header>
              <sui-card-meta>Create in Sep 2014</sui-card-meta>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="users" />
              2 Members</sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-card-group :items-per-row="3">
            <sui-card>
              <sui-dimmer-dimmable
                @mouseenter.native="example.image.cardOneActive = true"
                @mouseleave.native="example.image.cardOneActive = false">
                <sui-image src="/static/images/avatar/large/elliot.jpg" />
                <sui-dimmer blurring :active="example.image.cardOneActive">
                  <sui-button inverted>Add Friend</sui-button>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Team Fu</sui-card-header>
                <sui-card-meta>Create in Sep 2014</sui-card-meta>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="users" /> 2 Members
              </sui-card-content>
            </sui-card>

            <sui-card>
              <sui-dimmer-dimmable
                @mouseenter.native="example.image.cardTwoActive = true"
                @mouseleave.native="example.image.cardTwoActive = false">
                <sui-image src="/static/images/avatar/large/jenny.jpg" />
                <sui-dimmer blurring :active="example.image.cardTwoActive">
                  <sui-button primary>Add Friend</sui-button>
                </sui-dimmer>
              </sui-dimmer-dimmable>
              <sui-card-content>
                <sui-card-header>Team Hess</sui-card-header>
                <sui-card-meta>Create in Aug 2014</sui-card-meta>
              </sui-card-content>
              <sui-card-content extra>
                <sui-icon name="users" /> 2 Members
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Header
            <sui-header-subheader>
              A card can contain a header
            </sui-header-subheader>
          </sui-header>
          <sui-card-group :items-per-row="3">
            <sui-card>
              <sui-card-content>
                <sui-card-header>Elliot Fu</sui-card-header>
                <sui-card-meta>Friend</sui-card-meta>
                <sui-card-description>
                  Elliot Fu is a film-maker from New York.
                </sui-card-description>
              </sui-card-content>
            </sui-card>

            <sui-card>
              <sui-card-content>
                <sui-card-header>Veronika Ossi</sui-card-header>
                <sui-card-meta>Friend</sui-card-meta>
                <sui-card-description>
                  Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.
                </sui-card-description>
              </sui-card-content>
            </sui-card>

            <sui-card>
              <sui-card-content>
                <sui-card-header>Jenny Hess</sui-card-header>
                <sui-card-meta>Friend</sui-card-meta>
                <sui-card-description>
                  Jenny is a student studying Media Management at the New School
                </sui-card-description>
              </sui-card-content>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header>Metadata
            <sui-header-subheader>
              A card can contain content metadata
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Cute Dog</sui-card-header>
              <sui-card-meta>
                <span>2 days ago</span>
                <a>Animals</a>
              </sui-card-meta>
              <sui-image src="/static/images/wireframes/paragraph.png" />
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Link
            <sui-header-subheader>
              A card cna contain links as images, headers, or inside content
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-image src="/static/images/avatar/large/steve.jpg" />
            <sui-card-content>
              <sui-card-header><a>Steve Jobes</a></sui-card-header>
              <sui-card-meta>Last Seen 2 days ago</sui-card-meta>
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Buttons
            <sui-header-subheader>
              A card can contain buttons
            </sui-header-subheader>
          </sui-header>
          <sui-card-group :items-per-row="3">
            <sui-card>
              <sui-card-content>
                <sui-card-header>Elliot Fu</sui-card-header>
                <sui-card-meta>FriendM</sui-card-meta>
                <sui-card-description>
                  Elliot Fu is a film-maker from New York.
                </sui-card-description>
              </sui-card-content>
              <sui-button attached="bottom">
                <sui-icon name="add" /> Add Friend
              </sui-button>
            </sui-card>

            <sui-card>
              <sui-button attached="top">
                <sui-icon name="add" /> Add Friend
              </sui-button>
              <sui-card-content>
                <sui-card-header>Veronika Ossi</sui-card-header>
                <sui-card-meta>Friend</sui-card-meta>
                <sui-card-description>
                  Veronika Ossi is set designer living in New York who enjoys kittens, music, and partying.
                </sui-card-description>
              </sui-card-content>
            </sui-card>

            <sui-card>
              <sui-card-content>
                <sui-card-header>Jenny Hess</sui-card-header>
                <sui-card-meta>Friend</sui-card-meta>
                <sui-card-description>
                  Jenny is a student studying Media Management at the New School.
                </sui-card-description>
              </sui-card-content>
              <sui-button attached="bottom">
                <sui-icon name="add" /> Add Friend
              </sui-button>
            </sui-card>
          </sui-card-group>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Approval
            <sui-header-subheader>
              A card can contain a link or star action
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Cute Dog
                <sui-icon name="like" class="right floated" size="small" />
                <sui-icon name="star" class="right floated" size="small" />
              </sui-card-header>
              <sui-image src="/static/images/wireframes/paragraph.png" />
            </sui-card-content>
            <sui-card-content extra>
              <span>
                <sui-icon name="heart" /> heart
              </span>
              <span slot="right">
                <sui-icon name="star" /> Favorite
              </span>
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Description
            <sui-header-subheader>
              A card can contain a description with one or more paragraphs
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Cute Dog</sui-card-header>
              <sui-card-meta>2 days ago</sui-card-meta>
              <sui-card-description>
                <p>
                  Cute dogs come in a variety of shapes and sizes. some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.
                </p>
                <p>
                  Many people also have their own barometers for what makes a cute dog.
                </p>
              </sui-card-description>
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header>Extra Content
            <sui-header-subheader>
              A card can contain extra content meant to be formatted separately from the main content
            </sui-header-subheader>
          </sui-header>
          <sui-card>
            <sui-card-content>
              <sui-card-header>Cute Dog</sui-card-header>
              <sui-card-meta>2 days ago</sui-card-meta>
              <sui-card-description>
                <p>
                  Cute dogs come in a variety of shapes and sizes. some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.
                </p>
                <p>
                  Many people also have their own barometers for what makes a cute dog.
                </p>
              </sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="check" /> 121 Votes
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>

    <sui-header size="huge">Variations</sui-header>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Fluid Card
            <sui-header-subheader>
              A fluid card takes up the width of its container
            </sui-header-subheader>
          </sui-header>
          <sui-grid :columns="3">
            <sui-grid-column>
              <sui-card class="fluid">
                <sui-image src="/static/images/avatar/large/daniel.jpg" />
                <sui-card-content>
                  <sui-card-header>Daniel Louise</sui-card-header>
                </sui-card-content>
              </sui-card>
            </sui-grid-column>
            <sui-grid-column>
              <sui-card class="fluid">
                <sui-image src="/static/images/avatar/large/helen.jpg" />
                <sui-card-content>
                  <sui-card-header>Helen Troy</sui-card-header>
                </sui-card-content>
              </sui-card>
            </sui-grid-column>
            <sui-grid-column>
              <sui-card class="fluid">
                <sui-image src="/static/images/avatar/large/elliot.jpg" />
                <sui-card-content>
                  <sui-card-header>Elliot Fu</sui-card-header>
                </sui-card-content>
              </sui-card>
            </sui-grid-column>
          </sui-grid>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Centered Card
            <sui-header-subheader>
              A card can center itself inside its container
            </sui-header-subheader>
          </sui-header>
          <sui-card class="centered">
            <sui-image src="/static/images/avatar/large/elyse.png" />
            <sui-card-content>
              <sui-card-header>Elyse</sui-card-header>
            </sui-card-content>
          </sui-card>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Raised Card
            <sui-header-subheader>
              A card may be formatted to raise above the page
            </sui-header-subheader>
          </sui-header>
          <sui-card class="raised">
            <sui-card-content>
              <sui-card-header>Cute Dog</sui-card-header>
              <sui-card-meta>Animals</sui-card-meta>
              <sui-image src="/static/images/wireframes/paragraph.png" />
            </sui-card-content>
            <sui-card-content extra>
              <span slot="right">
                <sui-image src="/static/images/avatar/small/matt.jpg" shape="circular" size="mini" /> Matt
              </span>
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
    return {
      example: {
        image: {
          cardOneActive: false,
          cardTwoActive: false
        }
      }
    }
  }
}
</script>
