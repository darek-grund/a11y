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
          <li class="tabs__tab"
              @click.prevent="goToStep(1)"
              :class="{'tabs__tab--active': step === 1}"
          >Step 1 - Personal Details</li>
          <li class="tabs__tab"
              @click.prevent="goToStep(2)"
              :class="{'tabs__tab--active': step === 2}"
          >Step 2 - Incident Details</li>
          <li class="tabs__tab"
              @click.prevent="goToStep(3)"
              :class="{'tabs__tab--active': step === 3}"
          >Step 3 - Expense Report</li>
        </ul>
      </div>
    </div>

    <!-- Step 1 -->
    <div class="row mb-10" v-if="step === 1">
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
            <input type="date" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Phone number</label>
            <input type="tel" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Email</label>
            <input type="email" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Policy number</label>
            <input type="number" class="form__input">
          </p>

          <div class="row">
            <div class="col-md-12 text-right">
              <button class="button button--primary" @click.prevent="goToStep(2)">Continue</button>
            </div>
          </div>

        </form>
      </div>
    </div>


    <!-- Step 2 -->
    <div class="row mb-10" v-if="step === 2">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <form action="" method="" class="form">
          <p>
            <label for="" class="form__label">Purpose of travel</label>
            <label>
              <input type="radio" name="purpose_of_travel" value="tourism" /> tourism
            </label><br>
            <label>
              <input type="radio" name="purpose_of_travel" value="study" /> study / mental work
            </label><br>
            <label>
              <input type="radio" name="purpose_of_travel" value="physical" /> physical work
            </label><br>
            <label>
              <input type="radio" name="purpose_of_travel" value="high-risk-sport" /> high-risk sport
            </label>
          </p>
          <p>
            <label for="" class="form__label">Country</label>
            <input type="text" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Address</label>
            <input type="text" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Date</label>
            <input type="date" class="form__input">
          </p>
          <p>
            <label for="" class="form__label">Incident description</label>
            <textarea name="" id="" cols="30" rows="10" class="form__textarea"></textarea>
          </p>

          <div class="row">
            <div class="col-md-12 justify-space-between">
              <button class="button button--secondary" @click.prevent="goToStep(1)">Return</button>
              <button class="button button--primary" @click.prevent="goToStep(3)">Continue</button>
            </div>
          </div>

        </form>
      </div>
    </div>


    <!-- Step 3 -->
    <div class="row mb-10" v-if="step === 3">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <form action="" method="" class="form">
          <table class="table mb-2">
            <tr class="table__row">
              <th colspan="3" class="table__header">Expense report</th>
            </tr>

            <tr class="table__row">
              <td class="table__price">&euro; 35</td>
              <td class="table__description">very expensive item</td>
              <td class="table__actions">
                <button>DEL</button>
                <button>EDIT</button>
              </td>
            </tr>

            <tr class="table__row">
              <td class="table__price">&euro; 325</td>
              <td class="table__description">not so much expensive item</td>
              <td class="table__actions">
                <button>DEL</button>
                <button>EDIT</button>
              </td>
            </tr>

            <tr class="table__row">
              <td class="table__price">&euro; 335</td>
              <td class="table__description">cheap item</td>
              <td class="table__actions">
                <button>DEL</button>
                <button>EDIT</button>
              </td>
            </tr>

            <tr class="table__row">
              <td colspan="3" class="table__actions">
                <button class="button button--link" @click.prevent="isPopupVisible = true">+ Add another expense</button>
              </td>
            </tr>
          </table>


          <div class="row">
            <div class="col-md-12 justify-space-between">
              <button class="button button--secondary" @click.prevent="goToStep(2)">Return</button>
              <button class="button button--primary" @click.prevent="goToStep(4)">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>

    <div class="popup" v-if="isPopupVisible">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 popup__inner">
            <h3 class="popup__header">Expense</h3>
            <button class="popup__close" @click.prevent="isPopupVisible=false"></button>
            <form action="">
              <p>
                <label for="" class="form__label">Name</label>
                <input type="text" name="name" class="form__input">
              </p>

              <p class="mb-4">
                <label for="" class="form__label">Price</label>
                <input type="number" name="price" min="0.00" max="10000.00" step="0.01" class="form__input" />
              </p>

              <div class="popup__actions">
                <button class="button button--secondary" @click.prevent="isPopupVisible=false">Cancel</button>
                <button class="button button--primary ml-2" @click.prevent="isPopupVisible=false">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'ClaimReportView',
    components: {},
    props: {},

    setup(props) {
      const router = useRouter();
      document.title = router.currentRoute.value.meta.title;

      const step = ref(3);
      const isPopupVisible = ref(false);
      const goToStep = s => step.value = s;

      return {
        step,
        goToStep,
        isPopupVisible,
      }
    },
  });
</script>

<style scoped lang="scss">

</style>