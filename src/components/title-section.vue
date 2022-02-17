<template lang="html">
  <div class="section__header container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="color__text" data-aos="fade-up" data-aos-duration="2000">Discover our dream of making the world play! </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    msg: String
  }
}
</script>

<style lang="css" scoped>
  .section__header{
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    box-sizing: border-box;
  }

  .section__header h1{
    font-size: 7vw;
    font-weight: 100;
    text-shadow: 10px 10px #ffffff17;
  }
</style>
