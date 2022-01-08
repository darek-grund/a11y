<template>
  <header-navigation></header-navigation>

  <main id="main-content">
    <router-view/>
  </main>

  <page-footer></page-footer>
</template>

<script>
  import { defineComponent } from 'vue';
  import HeaderNavigation from '@/components/HeaderNavigation';
  import PageFooter from '@/components/PageFooter';

  export default defineComponent({
    name: 'App',
    components: {
      HeaderNavigation,
      PageFooter,
    },
    props: {},

    setup(props) {
    },
  });
</script>