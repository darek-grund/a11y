<template>
  <footer class="footer container--fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <router-link to="/" class="branding">
            The Insurer
            <img src="@/assets/images/logo.jpg" class="logo" />
          </router-link>
        </div>

        <div class="col-md-2">
          <h3 class="title">About Us</h3>
          <ul>
            <li>
              <router-link to="/newsroom" class="footer__link">Newsroom</router-link>
            </li>
            <li>
              <router-link to="/careers" class="footer__link">Careers</router-link>
            </li>
            <li>
              <router-link to="/our-story" class="footer__link">Our story</router-link>
            </li>
            <li>
              <router-link to="/customer-stories" class="footer__link">Customer Stories</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-2">
          <h3 class="title">Products</h3>
          <ul>
            <li>
              <router-link to="/vacation-holiday" class="footer__link">Vacation / Holiday</router-link>
            </li>
            <li>
              <router-link to="/student-scholar" class="footer__link">Student / Scholar</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-2">
          <h3 class="title">Members</h3>
          <ul>
            <li>
              <router-link to="/forms-library" class="footer__link">Forms Library</router-link>
            </li>
            <li>
              <router-link to="/find-doctor" class="footer__link">Find a Doctor</router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "PageFooter",
  }
</script>

<style scoped>
</style>