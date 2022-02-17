<template lang="html">
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="@/assets/img/logo.jpg" alt="">
        </div>
        <div class="col-md-4">
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/regole">Le regole</router-link></li>
            <li><router-link to="/storia">La storia</router-link></li>
            <li><router-link to="/museo">Il museo</router-link></li>
            <li><router-link to="/contatti">Contatti</router-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="social__link">
            <h3>SEGUICI SU:</h3>
            <ul>
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  footer{
    width:100%;
    height: auto;
    padding: 50px 15px;
    color: #000;
    position: relative;
    z-index: 10;
  }

  footer img{
    width: 100%;
    max-width: 100px;
  }

  footer a{
    font-size: 16px;
    color: #035d8b;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    padding: 10px;
  }

  footer .social__link li{
    display: inline-block;
  }

  footer .social__link li a{
    font-size: 30px;
  }

  footer .social__link h3{
    color: #035d8b;
    font-size: 14px;
  }

</style>
