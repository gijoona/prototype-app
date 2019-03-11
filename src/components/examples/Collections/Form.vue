<template>
  <sui-container>
    <sui-header size="huge">Types</sui-header>
    <sui-grid>
      <sui-grid-row>
        <sui-grid-column>
          <sui-header size="large">Form
            <sui-header-subheader>
              A form
            </sui-header-subheader>
          </sui-header>
          <div>
            <sui-form>
              <sui-form-field>
                <label>First Name</label>
                <input type="text" placeholder="First Name"/>
              </sui-form-field>
              <sui-form-field>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name"/>
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="I agree to the Terms and Conditions" />
              </sui-form-field>
              <sui-button type="submit">Submit</sui-button>
            </sui-form>
          </div>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-container>
</template>
<script>
export default {
  name: 'Form',
  data: function () {
    return {}
  }
}
</script>
