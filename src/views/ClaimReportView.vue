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
                    :disabled="tabDisabled.step1"
            >Step 1 - Personal Details
            </button>
          </li>
          <li>
            <button class="tabs__tab"
                    @click.prevent="goToStep(2)"
                    :class="{'tabs__tab--active': step === 2}"
                    role="tab"
                    :disabled="tabDisabled.step2"
            >Step 2 - Incident Details
            </button>
          </li>
          <li>
            <button class="tabs__tab"
                    @click.prevent="goToStep(3)"
                    :class="{'tabs__tab--active': step === 3}"
                    role="tab"
                    :disabled="tabDisabled.step3"
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
            <label for="first_name" class="form__label">First name <span class="form_required">(required)</span></label>
            <input type="text" class="form__input" id="first_name"
                   required
                   v-model="form.step1.first_name.input"
                   @blur="validateField(form.step1, 'first_name')"
            >
            <form-error-message :message="form.step1.first_name.error" :isFirstError="form.step1.first_name.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="second_name" class="form__label">Second name <span class="form_required">(required)</span></label>
            <input type="text" class="form__input" id="second_name"
                   required
                   v-model="form.step1.second_name.input"
                   @blur="validateField(form.step1, 'second_name')"
            >
            <form-error-message :message="form.step1.second_name.error" :isFirstError="form.step1.second_name.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="birthday" class="form__label">Birthday</label>
            <input type="date" class="form__input" id="birthday"
                   v-model="form.step1.birthday.input"
                   @blur="validateField(form.step1, 'birthday')"
            >
            <form-error-message :message="form.step1.birthday.error" :isFirstError="form.step1.birthday.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="phone_number" class="form__label">Phone number</label>
            <input type="tel" class="form__input" id="phone_number"
                   v-model="form.step1.phone_number.input"
                   @blur="validateField(form.step1, 'phone_number')"
            >
            <form-error-message :message="form.step1.phone_number.error" :isFirstError="form.step1.phone_number.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="email" class="form__label">Email</label>
            <input type="email" class="form__input" id="email"
                   v-model="form.step1.email.input"
                   @blur="validateField(form.step1, 'email')"
            >
            <form-error-message :message="form.step1.email.error" :isFirstError="form.step1.email.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="policy_number" class="form__label">Policy number</label>
            <input type="number" class="form__input" id="policy_number"
                   v-model="form.step1.policy_number.input"
                   @blur="validateField(form.step1, 'policy_number')"
            >
            <form-error-message :message="form.step1.policy_number.error" :isFirstError="form.step1.policy_number.isFirstError"></form-error-message>
          </p>

          <div class="row">
            <div class="col-md-12 text-right">
              <input type="submit" class="button button--primary" @click.prevent="goToStep(2)" value="Continue">
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
            <input type="text" class="form__input" id="country"
                   v-model="form.step2.country.input"
                   @blur="validateField(form.step2, 'country')"
            >
            <form-error-message :message="form.step2.country.error" :isFirstError="form.step2.country.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="address" class="form__label">Address</label>
            <input type="text" class="form__input" id="address"
                   v-model="form.step2.address.input"
                   @blur="validateField(form.step2, 'address')">
            <form-error-message :message="form.step2.address.error" :isFirstError="form.step2.address.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="date" class="form__label">Date</label>
            <input type="date" class="form__input" id="date"
                   v-model="form.step2.date.input"
                   @blur="validateField(form.step2, 'date')">
            <form-error-message :message="form.step2.date.error" :isFirstError="form.step2.date.isFirstError"></form-error-message>
          </p>
          <p>
            <label for="description" class="form__label">Incident description</label>
            <textarea name="" id="description" cols="30" rows="10" class="form__textarea"
                      v-model="form.step2.description.input"
                      @blur="validateField(form.step2, 'description')"></textarea>
            <form-error-message :message="form.step2.description.error" :isFirstError="form.step2.description.isFirstError"></form-error-message>
          </p>

          <div class="row">
            <div class="col-md-12 justify-space-between">
              <button class="button button--secondary" @click.prevent="goToStep(1)">Return</button>
              <input type="submit" class="button button--primary" @click.prevent="goToStep(3)" value="Continue">
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
                <button class="button button--icon button--delete" aria-label="Delete expense"></button>
                <button class="button button--icon button--edit ml-2" aria-label="Edit expense"></button>
              </td>
            </tr>

            <tr class="table__row">
              <td class="table__price">&euro; 325</td>
              <td class="table__description">not so much- expensive item</td>
              <td class="table__actions">
                <button class="button button--icon button--delete" aria-label="Delete expense"></button>
                <button class="button button--icon button--edit ml-2" aria-label="Edit expense"></button>
              </td>
            </tr>

            <tr class="table__row">
              <td class="table__price">&euro; 335</td>
              <td class="table__description">cheap item</td>
              <td class="table__actions">
                <button class="button button--icon button--delete" aria-label="Delete expense"></button>
                <button class="button button--icon button--edit ml-2" aria-label="Edit expense"></button>
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
  import { defineComponent, ref, reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router'
  import FormErrorMessage from '@/components/FormErrorMessage';

  export default defineComponent({
    name: 'ClaimReportView',
    components: { FormErrorMessage },
    props: {},

    setup(props) {
      const router = useRouter();
      document.title = router.currentRoute.value.meta.title;

      const step = ref(1);
      const isPopupVisible = ref(false);

      const form = reactive({
        step1: {
          first_name: {
            input: 'fname',
            validate: v => v ? '' : 'Field is required',
          },
          second_name: {
            input: 'lname',
            validate: v => v  ? '' : 'Field is required',
          },
          birthday: {
            input: '2020-01-01',
            validate: v => v  ? '' : 'Must be valid date',
          },
          phone_number: {
            input: '',
            validate: v => !v || +v > 0 === ''  ? '' : 'Must be valid phone number',
          },
          email: {
            input: '',
            validate: v => !v ? '' : 'Must be valid email',
          },
          policy_number: {
            input: '',
            validate: v => !v || +v > 0 ? '' : 'Must be valid policy number',
          },
        },
        step2: {
          country: {
            input: '',
            validate: v => !v ? '' : 'This field should be clear to pass validation',
          },
          address: {
            input: '',
            validate: v => !v ? '' : 'This field should be clear to pass validation',
          },
          date: {
            input: '',
            validate: v => !v ? '' : 'This field should be clear to pass validation',
          },
          description: {
            input: '',
            validate: v => !v ? '' : 'This field should be clear to pass validation',
          },
        },
        step3: {},
      });

      const tabDisabled = reactive({
        step1: false,
        step2: true,
        step3: true,
      });

      const validateField = (step, fieldName) => {
        const field = step[fieldName];
        field.error = field.validate(field.input);
        setFirstError(step);
        return field.error;
      };

      const validateStep = (targetStep) => {
        let step;
        switch(targetStep) {
          case 1:
            step = form.step1;
            break;
          case 2:
            step = form.step2;
            break;
          case 3:
            step = form.step3;
            break;
        }

        const errors = Object.keys(step).map((key) => validateField(step, key));
        return errors.every(val => val === '');
      };

      const setFirstError = (step) => {
        let isFirstError = true;
        Object.keys(step).map((key) => {
          if (isFirstError && step[key].error) {
            step[key].isFirstError = true;
            isFirstError = false;
          } else {
            step[key].isFirstError = false;
          }
        });
      };

      const goToStep = (targetStep) => {
        console.log('gotoStep', targetStep);
        let isValid;
        switch(targetStep) {
          case 1:
            isValid = true;
            break;
          case 2:
            tabDisabled.step2 = false;
            isValid = validateStep(1);
            break;
          case 3:
            tabDisabled.step3 = false;
            isValid = validateStep(2);
            break;
          case 4:
            isValid = validateStep(3);
            break;
        }

        if (isValid) {
          step.value = targetStep;
        }

        if(step.value === 4) {
          // add toast here
          tabDisabled.step1 = false;
          tabDisabled.step2 = true;
          tabDisabled.step3 = true;
          step.value = 1;
        }
      };

      step.value = 3;

      return {
        step,
        goToStep,
        isPopupVisible,
        form,
        validateField,
        tabDisabled,
      }
    },
  });
</script>

<style scoped lang="scss">

</style>