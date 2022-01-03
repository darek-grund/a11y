<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref, watchEffect } from 'vue';
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'StaticPageView',
    components: {},
    props: {},

    setup() {
      const router = useRouter();
      const title = ref();

      watchEffect(() => {
        title.value = router.currentRoute.value.meta.title;
        document.title = title.value + ' - Page description - The Insurer';
      });

      return {
        title,
      }
    },
  });
</script>
