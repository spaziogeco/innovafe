<template lang="html">
  <header class="header__site">
    <div class="nav__menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="hamburger__menu" onclick="hamburger()">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <div class="float__menu">
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
    </div>
  </header>
</template>

<script>
function hamburger() {
   var element = document.getElementById("hamburger__menu");
   element.classList.add("is-active");
}
export default {}
</script>

<style lang="css" scoped>
.header__site{
  width: calc(100% - 20px);
  margin: auto;
  border-radius: 10px;
  height: 90px;
  background: #fff;
  top: 0;
  box-shadow: 0 4px 18px rgb(0 0 0 / 10%);
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
  padding: 15px;
}

.header__site a{
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.nav__menu{
  margin-right:30px;
}

#hamburger__menu .line{
  width: 50px;
  height: 5px;
  background-color: #ff6900;
  border-radius: 10px;
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
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
  right: -100%;
  top: 0;
  background: red;
  transition: all .2s linear;
}

.float__menu.active{
  right: 0;
}

</style>
