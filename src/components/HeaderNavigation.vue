<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <header class="header">
          <router-link to="/" class="branding">
            The Insurer
            <img src="@/assets/images/logo.jpg" class="logo" alt="The Insurer Home" />
          </router-link>
          <nav class="nav">
            <button class="nav__toggle"
                    :aria-expanded="isOpen"
                    aria-label="Toggle navigation"
                    aria-controls="main-navigation"
                    @click="toggleNavigation"
            ></button>
            <ul class="nav__list" :class="{ 'nav__list--open': isOpen }" id="main-navigation">
              <li class="nav__item">
                <router-link to="/" class="nav__link" @click="closeNavigation">Insurance</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/about-us" class="nav__link" @click="closeNavigation">About us</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/claim-report" class="nav__link" @click="closeNavigation">Claim report</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/contact" class="nav__link" @click="closeNavigation">Contact</router-link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'HeaderNavigation',

    setup() {
      const isOpen = ref(false);
      const toggleNavigation = () => {
        isOpen.value = !isOpen.value;
      };
      const closeNavigation = () => {
        isOpen.value = false;
      };

      return {
        isOpen,
        closeNavigation,
        toggleNavigation,
      }
    }
  }
</script>

<style scoped>

</style>