<template lang="html">
  <main class="main">
    <div class="container">
      <div class="row">
        <h1 class="title__musa" data-aos="zoom-out-down" data-aos-duration="3000">MVSA</h1>
      </div>
    </div>
    <HeaderSection></HeaderSection>
    <div class="element__graphic" :style="{ backgroundImage: `url(${require('@/assets/img/home09_bg.png')})` }"></div>
    <Scene></scene>
    <div class="element__graphic--rev" :style="{ backgroundImage: `url(${require('@/assets/img/home09_bg.png')})` }"></div>
    <Content></Content>
  </main>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/header.vue'
import HeaderSection  from '@/components/title-section.vue'
// import Footer  from '@/components/footer.vue'
import Content  from '@/components/content.vue'
import Scene  from '@/components/3dscene.vue'
export default {
  components: {
    Scene,
    HeaderSection,
    Content,
  }
}
</script>

<style lang="css" scoped>

.element__graphic--rev,
.element__graphic{
    height: 99px;
    width: 100%;
    background-size: cover;
    background-repeat: repeat-x;
}

.element__graphic--rev{
  transform: rotate(-180deg);
}

  .title__musa{
    font-family: 'Poppins', sans-serif;
    font-size: 30vw;
    text-align: center;
    color: #fff;
    font-weight: 100;
    text-shadow: 10px 10px #ffffff17;
    /* font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: -19px; */
  }
</style>
