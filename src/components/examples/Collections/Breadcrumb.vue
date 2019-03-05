<template>
  <sui-container>
    <sui-header size="huge">Types</sui-header>
    <div>
      <sui-header size="large">Breadcurmb
        <sui-header-subheader>
          A standard breadcrumb
        </sui-header-subheader>
      </sui-header>
      <div>
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider />
          <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
          <sui-breadcrumb-divider />
          <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
        </sui-breadcrumb>
      </div>
      <div>
        <sui-breadcrumb :sections="sections" />
      </div>
      <div>
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right angle" />
          <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right angle" />
          <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
        </sui-breadcrumb>
      </div>
      <div>
        <sui-breadcrumb :sections="sections" icon="right angle" />
      </div>
    </div>

    <sui-header size="huge">Content</sui-header>
    <div>
      <sui-header size="large">Divider
        <sui-header-subheader>
          A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text
        </sui-header-subheader>
      </sui-header>
      <div>
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
          <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
          <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
          <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
        </sui-breadcrumb>
      </div>
      <div>
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right chevron" />
          <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right arrow" />
          <sui-breadcrumb-section active>Personal Information</sui-breadcrumb-section>
        </sui-breadcrumb>
      </div>
    </div>

    <div>
      <sui-header size="large">Section
        <sui-header-subheader>
          A breadcrumb can contain sections that can either be formatted as a link or text
        </sui-header-subheader>
      </sui-header>
      <div>
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
          <sui-breadcrumb-section active>Search</sui-breadcrumb-section>
        </sui-breadcrumb>
      </div>
    </div>

    <div>
      <sui-header size="large">Link
        <sui-header-subheader>
          A section may be linkable or contain a link
        </sui-header-subheader>
      </sui-header>
      <div>
        <sui-breadcrumb>
          <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
          <sui-breadcrumb-divider />
          <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
          <sui-breadcrumb-divider icon="right chevron" />
          <sui-breadcrumb-section active>
            Search for:
            <a href="javascript:void 0">paper towels</a>
          </sui-breadcrumb-section>
        </sui-breadcrumb>
      </div>
    </div>
  </sui-container>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data: function () {
    return {
      sections: [
        { key: 'Home', content: 'Home', link: true },
        { key: 'Store', content: 'Store', link: true },
        { key: 'T-Shirt', content: 'T-Shirt', active: true }
      ]
    }
  }
}
</script>
