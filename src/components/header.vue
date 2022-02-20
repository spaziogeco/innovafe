<template lang="html">
  <header class="header__site">
    <div class="logo__site">
      <router-link to="/home">
        <img src="@/assets/img/logo.jpg" alt="">
      </router-link>
    </div>
    <div class="nav__menu">
      <router-link to="/login">Login</router-link>

    </div>
    <div id="hamburger__menu">
      <span class="line color__bg"></span>
      <span class="line color__bg"></span>
      <span class="line color__bg"></span>
    </div>
    <div class="float__menu">
      <h2 class="title__float">MVSA</h2>
      <!--figure>
        <img src="@/assets/img/logo.svg" alt="">
        <h2>MVSA</h2>
      </figure-->
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/regole">Le regole</router-link></li>
        <li><router-link to="/classifica">Classifica globale</router-link></li>
        <li><a href="#">Classfica locale</a>
        <li><router-link to="/museo">Il museo</router-link></li>
        <li><router-link to="/contatti">Contatti</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  mounted () {
    $('#hamburger__menu').click(function(){
      $(this).toggleClass('is-active');
      $('.float__menu').toggleClass('active');
    });
  }
}
</script>

<style lang="css" scoped>
.header__site{
  /* width: calc(100% - 20px); */
  width: 100%;
  transition: all .2s linear;
  margin: auto;
  /* border-radius: 10px; */
  height: 90px;
  /* background: rgb(255 255 255 / 85%);
  background: rgb(31 81 82 / 89%); */
  top: 0;
  /* box-shadow: 0 4px 18px rgb(0 0 0 / 10%); */
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
  padding: 15px 60px;
  z-index: 999;

}

.header__site a{
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
}

.nav__menu{
  margin-right:30px;
}

#hamburger__menu .line{
  width: 50px;
  height: 5px;
  border-radius: 10px;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
}

#hamburger__menu:hover{
  cursor: pointer;
}

#hamburger__menu{
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#hamburger__menu.is-active{
  animation: smallbig 0.6s forwards;
}

@keyframes smallbig{
  0%, 100%{
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  50%{
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
}

#hamburger__menu.is-active .line:nth-child(1),
#hamburger__menu.is-active .line:nth-child(2),
#hamburger__menu.is-active .line:nth-child(3){
  -webkit-transition-delay: 0.2s;
  -o-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

#hamburger__menu.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger__menu.is-active .line:nth-child(1){
  -webkit-transform: translateY(13px) rotate(45deg);
  -ms-transform: translateY(13px) rotate(45deg);
  -o-transform: translateY(13px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);
}

#hamburger__menu.is-active .line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(-45deg);
  -ms-transform: translateY(-13px) rotate(-45deg);
  -o-transform: translateY(-13px) rotate(-45deg);
  transform: translateY(-13px) rotate(-45deg);
}

.float__menu{
  position: fixed;
  height: 100vh;
  width: 300px;
  left: -100%;
  top: 0;
  background: #fff;
  padding: 50px;
  transition: all .7s ease-out;
  box-shadow: 0 4px 18px rgb(0 0 0 / 10%);
  /* border-radius: 0px 0px 30px 0px; */
  box-sizing: border-box;
  z-index: 999;
  visibility: hidden;
}

.float__menu.active{
  left: 0;
  visibility: visible;
}

.float__menu a{
  font-size: 18px;
  line-height: 1;
  margin-bottom: 25px;
  display: block;
  font-weight: 400;
  color: #035d8b;
}

.float__menu .title__float{
  font-size: 50px;
  text-align: left;
  margin-bottom: 35px;
  color: #035d8b;
}

.logo__site{
  max-width: 70px;
  margin-right: auto;
}

.logo__site img{
  max-width: 100%;
}

</style>
