<template>
  <div class="container--fluid">
    <div class="slide">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 text-center">
          <h1>Travel Insurance</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque doloremque doloribus enim error nam, nisi perspiciatis reprehenderit sit suscipit!</p>
          <button class="button button--primary">Order now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePromo',
  }
</script>

<style scoped lang="scss">
  @import '@/assets/styles/_colors';

  .slide {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 700px;
    background: $gray1;
  }
</style>