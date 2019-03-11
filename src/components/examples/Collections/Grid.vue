<template>
  <sui-container>
    <sui-header size="huge">Types</sui-header>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Grid
            <sui-header-subheader>
              A basic grid
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-grid>
              <template v-for="(col, index) in columns">
                <sui-grid-column :key="index"/>
              </template>
            </sui-grid>
          </div>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Divided
            <sui-header-subheader>
              a grid can have dividers between its columns
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-grid :columns="3" divided>
              <sui-grid-row v-for="(row, i) in [,,]" :key="i">
                <sui-grid-column v-for="(col, j) in [,,,]" :key="j">
                  <docs-wireframe name="media-paragraph" />
                </sui-grid-column>
              </sui-grid-row>
            </sui-grid>
          </div>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Vertically Divided
            <sui-header-subheader>
              A grid can have dividers between rows
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-grid divided="vertically">
              <sui-grid-row :columns="2">
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
              </sui-grid-row>
              <sui-grid-row :columns="3">
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
              </sui-grid-row>
            </sui-grid>
          </div>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Celled
            <sui-header-subheader>
              A grid can have rows divided into cells
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-grid celled>
              <sui-grid-row>
                <sui-grid-column :width="3">
                  <docs-wireframe name="image" />
                </sui-grid-column>
                <sui-grid-column :width="13">
                  <docs-wireframe name="centered-paragraph" />
                </sui-grid-column>
              </sui-grid-row>
              <sui-grid-row>
                <sui-grid-column :width="3">
                  <docs-wireframe name="image" />
                </sui-grid-column>
                <sui-grid-column :width="10">
                  <docs-wireframe name="centered-paragraph" />
                </sui-grid-column>
                <sui-grid-column :width="3">
                  <docs-wireframe name="image" />
                </sui-grid-column>
              </sui-grid-row>
            </sui-grid>
          </div>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Internally Celled
            <sui-header-subheader>
              A grid can have rows divisions only between internal rows
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-grid celled="internally">
              <sui-grid-row>
                <sui-grid-column :width="3">
                  <docs-wireframe name="image" />
                </sui-grid-column>
                <sui-grid-column :width="10">
                  <docs-wireframe name="centered-paragraph" />
                </sui-grid-column>
                <sui-grid-column :width="3">
                  <docs-wireframe name="image" />
                </sui-grid-column>
              </sui-grid-row>
              <sui-grid-row>
                <sui-grid-column :width="3">
                  <docs-wireframe name="image" />
                </sui-grid-column>
                <sui-grid-column :width="10">
                  <docs-wireframe name="media-paragraph" />
                </sui-grid-column>
                <sui-grid-column :width="3">
                  <docs-wireframe name="image" />
                </sui-grid-column>
              </sui-grid-row>
            </sui-grid>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>

    <sui-header size="huge">Content</sui-header>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Rows
            <sui-header-subheader>
              A row is a horizontal grouping of columns.
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-grid :columns="3">
              <sui-grid-row>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
              </sui-grid-row>
              <sui-grid-row>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column>
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
              </sui-grid-row>
            </sui-grid>
          </div>
        </sui-grid-column>
      </sui-grid-row>

      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Columns
            <sui-header-subheader>
              Columns each contain gutters giving them equal spacing from other columns.
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-grid>
              <sui-grid-row>
                <sui-grid-column :width="8">
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column :width="8">
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
              </sui-grid-row>
              <sui-grid-row>
                <sui-grid-column :width="8">
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
                <sui-grid-column :width="8">
                  <docs-wireframe name="paragraph" />
                </sui-grid-column>
              </sui-grid-row>
            </sui-grid>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
</template>
<script>
export default {
  name: 'Grid',
  data: function () {
    return {
      columns: [...new Array(16)]
    }
  }
}
</script>
<style lang="css">
.grid:before {
  position: relative;
  background-color: #FAFAFA;
  content: '';
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  box-shadow: 0px 0px 0px 1px #DDDDDD inset;
}

.column:after {
  background-color: rgba(86, 61, 124, .1);
  box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
  content: "";
  display: block;
  min-height: 50px;
}
</style>
