<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Claim Report</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <ul class="tabs">
          <li class="tabs__tab tabs__tab--active">Step 1 - Personal Details</li>
          <li class="tabs__tab">Step 2 - Incident Details</li>
          <li class="tabs__tab">Step 3 Expense Report</li>
        </ul>
      </div>
    </div>

    <div class="row mb-10">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <form action="" method="" class="form">
          <p>
            <label for="" class="form__label">First name</label>
            <input type="text" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Second name</label>
            <input type="text" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Birthday</label>
            <input type="text" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Phone number</label>
            <input type="text" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Email</label>
            <input type="text" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Policy number</label>
            <input type="text" class="form__input">
          </p>

          <div class="row">
            <div class="col-md-12 text-right">
              <button class="button button--primary">Continue</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'ClaimReportView',
    components: {},
    props: {},

    setup(props) {
      const router = useRouter();
      document.title = router.currentRoute.value.meta.title;
    },
  });
</script>

<style scoped lang="scss">

</style>