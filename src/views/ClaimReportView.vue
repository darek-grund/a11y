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
        <ul class="tabs" role="tablist">
          <li>
            <button class="tabs__tab"
                    @click.prevent="goToStep(1)"
                    :class="{'tabs__tab--active': step === 1}"
                    role="tab"
            >Step 1 - Personal Details
            </button>
          </li>
          <li>
            <button class="tabs__tab"
                    @click.prevent="goToStep(2)"
                    :class="{'tabs__tab--active': step === 2}"
                    role="tab"
            >Step 2 - Incident Details
            </button>
          </li>
          <li>
            <button class="tabs__tab"
                    @click.prevent="goToStep(3)"
                    :class="{'tabs__tab--active': step === 3}"
                    role="tab"
            >Step 3 - Expense Report
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Step 1 -->
    <div class="row mb-10" v-if="step === 1">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <form action="" method="" class="form">
          <p>
            <label for="first_name" class="form__label">First name</label>
            <input type="text" class="form__input" id="first_name">
          </p>
          <p>
            <label for="second_name" class="form__label">Second name</label>
            <input type="text" class="form__input" id="second_name">
          </p>
          <p>
            <label for="birthday" class="form__label">Birthday</label>
            <input type="date" class="form__input" id="birthday">
          </p>
          <p>
            <label for="phone_number" class="form__label">Phone number</label>
            <input type="tel" class="form__input" id="phone_number">
          </p>
          <p>
            <label for="email" class="form__label">Email</label>
            <input type="email" class="form__input" id="email">
          </p>
          <p>
            <label for="policy_number" class="form__label">Policy number</label>
            <input type="number" class="form__input" id="policy_number">
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
          <fieldset>
            <legend class="form__label">Purpose of travel</legend>
            <label>
              <input type="radio" name="purpose_of_travel" value="tourism"/> tourism
            </label>
            <label>
              <input type="radio" name="purpose_of_travel" value="study"/> study / mental work
            </label>
            <label>
              <input type="radio" name="purpose_of_travel" value="physical"/> physical work
            </label>
            <label>
              <input type="radio" name="purpose_of_travel" value="high-risk-sport"/> high-risk sport
            </label>
          </fieldset>
          <p>
            <label for="country" class="form__label">Country</label>
            <input type="text" class="form__input" id="country">
          </p>
          <p>
            <label for="address" class="form__label">Address</label>
            <input type="text" class="form__input" id="address">
          </p>
          <p>
            <label for="date" class="form__label">Date</label>
            <input type="date" class="form__input" id="date">
          </p>
          <p>
            <label for="description" class="form__label">Incident description</label>
            <textarea name="" id="description" cols="30" rows="10" class="form__textarea"></textarea>
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
                <button class="button button--link" @click.prevent="isPopupVisible = true">+ Add another expense
                </button>
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

    <div class="popup" v-if="isPopupVisible" role="dialog" aria-labelledby="popupHeader">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 popup__inner">
            <h2 class="popup__header" id="popupHeader">Expense</h2>
            <button class="popup__close" @click.prevent="isPopupVisible=false" aria-label="Close">X</button>
            <form action="">
              <p>
                <label for="expense_name" class="form__label">Name</label>
                <input type="text" name="name" class="form__input" id="expense_name">
              </p>

              <p class="mb-4">
                <label for="expense_price" class="form__label">Price</label>
                <input type="number" name="price" min="0.00" max="10000.00" step="0.01" class="form__input"
                       id="expense_price"/>
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

      const step = ref(1);
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