<template lang="html">
  <main class="main">
    <HeaderSection></HeaderSection>
    <div class="container container__form">
      <div class="row">
        <div class="col-md-6">
          <p class="text__normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="col-md-6">
          <form class="form-contact" action="index.html" method="post">
            <input type="text" name="nome" value="" placeholder="Nome e Cognome">
            <input type="email" name="email" value="" placeholder="email">
            <input type="text" name="oggetto" value="" placeholder="oggetto">
            <textarea name="name" rows="8" cols="80"></textarea>
            <input type="submit" name="" value="INVIA">
          </form>
        </div>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.946761992415!2d9.87115741550119!3d46.171715479115605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47838e0c9a245b9b%3A0xca81d8199f4b2c76!2sMVSA%20-%20Museo%20Valtellinese%20di%20Storia%20e%20Arte!5e0!3m2!1sit!2sit!4v1645105051133!5m2!1sit!2sit" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <Footer></Footer>
  </main>
</template>

<script>
// @ is an alias to /src
import HeaderSection  from '@/components/title-section.vue'
import Footer  from '@/components/footer.vue'
import Content  from '@/components/content.vue'
export default {
  components: {
    HeaderSection,
    Footer,
  }
}
</script>

<style lang="css" scoped>

.container__form{
  margin-top: 35px;
}

.form-contact{
  margin-bottom: 100px;
}

.form-contact textarea,
.form-contact input{
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-bottom: 15px;
}

.form-contact textarea{
  padding: 15px;
  border-radius: 5px;
}

.form-contact input{
  height: 35px;
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
}

.form-contact input[type="submit"]{
  background: #fff;
}

</style>
