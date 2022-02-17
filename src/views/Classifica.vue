<template lang="html">
  <main class="main">
    <Header></Header>
    <HeaderSection></HeaderSection>
    <div id="container" class="container__leaderboards container">
      <div class="row highLight">
          <div class="name">Player1</div><div class="score">430</div>
      </div>

      <div class="row highLight">
          <div class="name">Player2</div><div class="score">580</div>
      </div>

      <div class="row">
          <div class="name">Player3</div><div class="score">310</div>
      </div>

      <div class="row">
          <div class="name">Player4</div><div class="score">640</div>
      </div>

      <div class="row">
          <div class="name">Player5</div><div class="score">495</div>
      </div>
    </div>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from '@/components/header.vue'
import HeaderSection  from '@/components/title-section.vue'
import Footer  from '@/components/footer.vue'
export default {
  components: {
    Header,
    HeaderSection,
    Footer,
  }
}
</script>

<style lang="css" scoped>

.container__leaderboards{
  background: #fff;
  border-radius: 30px;
  margin-bottom: 100px;
  overflow: hidden;
}

.container__leaderboards .row{
  padding: 15px;
  border-bottom: 1px solid;
}

.name {
	position: relative;
	display: inline-block;
	width: 75%;
	line-height: 45px;
}

.score {
	position: relative;
	display: inline-block;
	width: 25%;
}
.highLight{
  background: rgb(3,93,139);
  background: linear-gradient(90deg, rgba(3,93,139,1) 0%, rgba(255,255,255,1) 100%);
}

.highLight .name{
  color: #fff;
}

</style>
