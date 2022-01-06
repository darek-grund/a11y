<template>
  <span v-if="message"
       class="error"
       v-bind="attributes"
  >
    {{ message }}
  </span>
</template>

<script>
  import { defineComponent, ref, computed } from 'vue';

  export default defineComponent({
    name: 'FormErrorMessage',
    components: {},
    props: {
      message: String,
      isFirstError: Boolean,
    },

    setup(props) {
      const attributes = computed(() => {
        if (props.isFirstError) {
          return {
            'aria-live' : 'assertive',
          }
        }
      });

      return {
        attributes,
      }
    },
  });
</script>

<style scoped>

</style>