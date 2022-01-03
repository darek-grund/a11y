<template>
  <home-promo></home-promo>
  <feature-list></feature-list>

  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2>Explore Our Travel Topics</h2>
      </div>

    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="explore">
          <div class="explore__image">
            <img src="@/assets/images/explore1.jpg" />
          </div>
          <p class="explore__title">Renting Vacation Homes</p>
        </div>
      </div>

      <div class="col-md-3">
        <div class="explore">
          <div class="explore__image">
            <img src="@/assets/images/explore2.jpg" />
          </div>
          <p class="explore__title">Trends &amp; Predictions</p>
        </div>
      </div>

      <div class="col-md-3">
        <div class="explore">
          <div class="explore__image">
            <img src="@/assets/images/explore3.jpg" />
          </div>
          <p class="explore__title">Popular Travel Destinations for 2021</p>
        </div>
      </div>

      <div class="col-md-3">
        <div class="explore">
          <div class="explore__image">
            <img src="@/assets/images/explore4.jpg" />
          </div>
          <p class="explore__title">Travel Gear for Safe Travels in 2021</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container--fluid">
    <div class="slide">
      <div class="row">
        <div class="col-md-12 text-center">
          <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis, earum ex laborum sed velit!"</p>
          <img src="@/assets/images/duck.jpg" class="avatar" />
          <p class="description">Donald Duck, CEO of Disney</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row row--align-center">
      <div class="col-md-6">
        <h3>Are you looking for an insurance?</h3>
        <p>Contact us to order now</p>
      </div>

      <div class="col-md-6 text-right">
        <a href="tel:123-456-7890" class="button button--secondary">Call Us</a>
        <router-link to="/about-us" class="button button--primary ml-2">Send a Message</router-link>
      </div>
    </div>
  </div>

</template>

<script>
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import HomePromo from '@/components/HomePromo';
  import FeatureList from '@/components/FeatureList';

  export default defineComponent({
    name: 'InsuranceView',
    components: {
      HomePromo,
      FeatureList,
    },
    props: {},

    setup(props) {
      const router = useRouter();
      document.title = router.currentRoute.value.meta.title;
    },
  });
</script>

<style scoped lang="scss">
  @import '@/assets/styles/_colors';

  .container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 6rem;
  }

  .slide {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: $gray1;

    p {
      font-size: 2.5rem;
    }

    .description {
      font-size: 1.6rem;
    }

    .avatar {
      display: inline-flex;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
</style>
