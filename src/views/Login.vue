<template lang="html">
  <main class="main">
    <Header></Header>
    <div class="container__login">
      <form class="form__login" action="index.html" method="post">
        <input type="text" name="username" value="" placeholder="Username">
        <input type="password" name="password" value="" placeholder="Password">
        <input type="submit" name="" value="Accedi">
      </form>
    </div>
    <Footer></Footer>
  </main>
</template>

<script>

  // @ is an alias to /src
  import Header from '@/components/header.vue'
  import Footer  from '@/components/footer.vue'
  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>

<style lang="css" scoped>

.container__login{
  height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.form__login{
  width: 300px;
  padding: 30px;
  background: #fff;
}

  .form__login input{
    display: block;
    width: 100%;
    height: 30px;
    padding: 0 15px;
    text-transform: uppercase;
    color:#035d8b;
    box-sizing: border-box;
    margin-bottom: 15px;
    border-radius: 5px;
    border:1px solid #ccc;
  }

  .form__login input[type="submit"]{
    background: #035d8b;
    color: #fff;
  }


</style>
