<template>
  <div id="app">
    <Header></Header>
    <BgAnimation></BgAnimation>

    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600&display=swap');
@import './assets/css/bootstrap-grid.min.css';
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}
body {
	line-height: 1;
  /* font-family: 'Work Sans', sans-serif; */
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

/* remember to define focus styles! */
:focus {
	outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
	text-decoration: none;
}
del {
	text-decoration: line-through;
}

/* tables still need 'cellspacing="0"' in the markup */
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body{
  /* background: #272727; */
  /* background: #1f5153; */
  background: #005d88;
  position: relative;
  /* background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(39,39,39,1) 20%, rgba(39,39,39,1) 100%); */
  font-family: 'Poppins', sans-serif;
  transition: background 1s linear;
  overflow-x: hidden;
  cursor: none;
}

/* body:after{
  content: '';
  width: calc(100% - 20px);
  height: calc(100% - 20px);;
  border: 10px solid #fff;
  z-index: 99999;
  position: absolute;
  top: 0;
  pointer-events: none;
  mix-blend-mode: overlay;
} */

/* body.scroll{
  background: #fff;
} */

/* body.scroll footer{
  background: #000;
  color: #fff;
}

body.scroll .color__bg{
  background: #000;
}

body.scroll .color__text{
  color: #000;
} */

body.scroll .header__site{
  background: #035d8b;
}

footer,
.color__bg{
  background: #fff;
}
.color__text{
  color: #fff;
}

.base__text{
  font-size: 30px;
  line-height: 1.2;
  font-weight: 100;
}

.text__normal{
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  color: #fff;
  margin-bottom: 35px;
}

.container__line{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.container__line .line__right,
.container__line .line__left{
  height: 100%;
  width: 1px;
  background: #fff;
  left: 15px;
  position: absolute;
}

.container__line .line__right{
  left: initial !important;
  right: 15px;
}

body .mouse{
  width: 70px;
    height: 70px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    position: fixed;
    z-index: 3051;
    pointer-events: none;
    mix-blend-mode: exclusion;
}

body .mouse-center {
    position: fixed;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    transition: all 0.075s;
    z-index: 3051;
    pointer-events: none;
    mix-blend-mode: exclusion;
}

.container-fluid,
.container{
  width: auto !important;
}

</style>
<script>
import BgAnimation from '@/components/bg-animation.vue'
import Header from '@/components/header.vue'
import Footer  from '@/components/footer.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  components: {
    Header,
    Footer,
    BgAnimation
  },
  mounted () {
    AOS.init();
    alert('ATTENZIONE!! questa è una bozza\nIl sito è ancora in sviluppo\nLe pagine il layout e i testi non sono definitivi!')
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("body").addClass("scroll");
        }else{
            $("body").removeClass("scroll");
        }
    }); //missing );

    if (!$('.mouse').length) {
  $('<div class="mouse"></div><div class="mouse-center"></div>').insertAfter('#app');
  $(document).on('mousemove', function(e) {
    $('.mouse').css({'top': (e.clientY-30)+'px', 'left': (e.pageX-30)+'px'});
    $('.mouse-center').css({'top': (e.clientY+0)+'px', 'left': (e.pageX+0)+'px'});
  });
}



  }
}


</script>
