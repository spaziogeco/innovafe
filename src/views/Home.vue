<template lang="html">
  <div class="main">
    <div class="menu-site">
      <div class="hamburger">
        <span class="quad"></span>
        <span class="quad"></span>
        <span class="quad"></span>
        <span class="quad"></span>
        <span class="quad"></span>
        <span class="quad"></span>
        <span class="quad"></span>
        <span class="quad"></span>
        <span class="quad"></span>
      </div>
    </div>
    <div class="bg-game">
      <div class="container-game">
        <div class="menu-game">
          <div class="container-title-menuG">
            <h2 class="title-menuG">MVSA IMPACT GLOBAL FACTOR</h2>
          </div>
          <div class="filter-game">
            <div class="title-form-game">
              <h2>WHERE ARE YOU FROM?</h2>
            </div>
            <form class="form-game" action="index.html" method="post">
                <select class="" name="">
                  <option value="">Europe</option>
                  <option value="">Lorem</option>
                  <option value="">Lorem</option>
                  <option value="">Lorem</option>
                </select>
                <select class="" name="">
                  <option value="">Italy</option>
                  <option value="">Lorem</option>
                  <option value="">Lorem</option>
                  <option value="">Lorem</option>
                </select>
                <select class="" name="">
                  <option value="">Lombardy</option>
                  <option value="">Lorem</option>
                  <option value="">Lorem</option>
                  <option value="">Lorem</option>
                </select>
                <select class="" name="">
                  <option value="">Pavia</option>
                  <option value="">Milano</option>
                  <option value="">Lorem</option>
                  <option value="">Lorem</option>
                </select>
                <input type="submit" name="" value="SEARCH">
            </form>
          </div>
        </div>
        <Scene3D></Scene3D>
      </div>
    </div>
  </div>
</template>

<script>
import Scene3D  from '@/components/3dSceneWorld.vue'

export default {
  components: {
    Scene3D
  }
}
</script>

<style lang="css" scoped>
body {
  margin: 0;
  background:#72bdd4;
}
body * {
  box-sizing:border-box;
}
.container-game {
  height:auto;
  border:2px solid #125f71;
  border-radius:50px;
  width:calc(100% - 80px);
  display:block;
  background:#fff;
  margin-left:auto;
}
.menu-game {
  max-width:315px;
  margin-left:55px;
  margin-top:20px;
  margin-bottom:40px;
  display: inline-block;
  float: left;
}
.container-title-menuG,
.title-form-game {
  background-color: #125f71;
  padding:25px 15px;
  margin-bottom:20px;
}
.container-title-menuG h2 {
  color:#fff;
  font-size:39px;
  text-transform:uppercase;
  margin:0;
}
.title-form-game h2{
  margin:0;
  color:#fff;
  font-size:23px;
  text-transform:uppercase;
}
form.form-game select {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 30px;
  padding: 10px;
  border: solid 2px #115f71;
  color:#000;
  font-size:18px;
  font-weight:bold;
  background: rgb(135,211,225);
  background: linear-gradient(270deg, rgba(135,211,225,1) 0%, rgba(250,250,250,1) 100%);
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
}
.filter-game{
  background:#f4f4f4;
}
form.form-game {
  padding: 25px 10px;
}
form.form-game input[type="submit"]{
  background:#115f71;
  color:#fff;
  font-size:25px;
  text-transform: uppercase;
  padding: 18px 10px;
  margin: auto;
  display: block;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 50px;
}
.menu-site {
    height: 100vh;
    width: 100px;
    display: inline-block;
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    background: #72bdd4;
}
.menu-site .hamburger {
  height:100px;
  width:100px;
  background: #115f71;
  cursor:pointer;
  position:relative;
  padding:20px;
}
.menu-site .hamburger .quad{
  position:absolute;
  height:15px;
  width:15px;
  background:#000;
}
.menu-site .hamburger .quad:first-child{
  left: 20px;
  top: 20px;
}
.menu-site .hamburger .quad:nth-child(2){
  left:43px;
  top:20px;
}
.menu-site .hamburger .quad:nth-child(3){
  left:65px;
  top:20px;
}
.menu-site .hamburger .quad:nth-child(4){
  left: 20px;
  top: 43px;
}
.menu-site .hamburger .quad:nth-child(5){
  left:43px;
  top:43px;
}
.menu-site .hamburger .quad:nth-child(6){
  left:65px;
  top:43px;
}
.menu-site .hamburger .quad:nth-child(7){
  left: 20px;
  top: 65px;
}
.menu-site .hamburger .quad:nth-child(8){
  left:43px;
  top:65px;
}
.menu-site .hamburger .quad:nth-child(9){
  left:65px;
  top:65px;
}
.bg-game{
  background: rgb(135,211,225);
  background: linear-gradient(270deg, rgba(135,211,225,1) 0%, rgba(250,250,250,1) 100%);
  padding: 45px 40px;
}
</style>
