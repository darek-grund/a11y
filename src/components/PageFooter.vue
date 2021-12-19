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
              <a href="" class="footer__link">Newsroom</a>
            </li>
            <li>
              <a href="" class="footer__link">Careers</a>
            </li>
            <li>
              <a href="" class="footer__link">Our story</a>
            </li>
            <li>
              <a href="" class="footer__link">Customer Stories</a>
            </li>
          </ul>
        </div>

        <div class="col-md-2">
          <h3 class="title">Products</h3>
          <ul>
            <li>
              <a href="" class="footer__link">Vacation / Holiday</a>
            </li>
            <li>
              <a href="" class="footer__link">Student / Scholar</a>
            </li>
            <li>
              <a href="" class="footer__link">Mission</a>
            </li>
            <li>
              <a href="" class="footer__link">Marine Captain / Crew</a>
            </li>
            <li>
              <a href="" class="footer__link">Employer / Business Travel</a>
            </li>
          </ul>
        </div>

        <div class="col-md-2">
          <h3 class="title">Members</h3>
          <ul>
            <li>
              <a href="" class="footer__link">Forms Library</a>
            </li>
            <li>
              <a href="" class="footer__link">Find a Doctor</a>
            </li>
            <li>
              <a href="" class="footer__link">Renew Policy</a>
            </li>
            <li>
              <a href="" class="footer__link">Claims Center</a>
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