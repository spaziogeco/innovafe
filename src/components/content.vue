<template lang="html">
  <div class="container normal__container">
    <!--div class="layer__parallax" data-offset="15" data-container="normal__container"></div-->
    <div class="row">
      <div class="col-md-12">
        <p class="base__text color__text" data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .container.normal__container{
    margin-bottom: 50px;
    margin-top: 50px;
    box-sizing:border-box;
    /* padding-left: 50px;
    padding-right: 50px; */
  }

  .normal__container{
    position: relative;
  }

  .layer__parallax{
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    right:-15px;
    top: -15px;
    mix-blend-mode: darken;
    background: linear-gradient(266deg, rgba(255,255,255,1) 0%, rgba(255,250,0,1) 0%, rgba(255,255,255,1) 100%);
  }

</style>
