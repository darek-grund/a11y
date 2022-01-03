<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header class="header">
          <router-link to="/" class="branding">
            The Insurer
            <img src="@/assets/images/logo.jpg" class="logo" alt="The Insurer Home" />
          </router-link>

          <nav>
            <ul class="nav">
              <li class="nav__item">
                <router-link to="/" class="nav__link">Insurance</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/about-us" class="nav__link">About us</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/claim-report" class="nav__link">Claim report</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/contact" class="nav__link">Contact</router-link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderNavigation',
  }
</script>

<style scoped>

</style>