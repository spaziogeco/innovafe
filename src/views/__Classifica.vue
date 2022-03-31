<template lang="html">
  <div class="container-fluid container-leaderboards-musa">
    <div class="row">
      <div class="col-md-3">
        <div class="single-place">
          <div class="percentage-content">
            <figure class="img-place">
              <img src="@/assets/img/palace.png" />
            </figure>
            <div class="percentage-line-first" style="--percentage:90%;">

            </div>
          </div>
          <h3 class="title-place">SCUOLA</h3>
        </div>
      </div>
      <div class="col-md-3">
        <div class="single-place">
          <div class="percentage-content">
            <figure class="img-place">
              <img src="@/assets/img/palace.png" />
            </figure>
            <div class="percentage-line-first" style="--percentage:90%;">

            </div>
          </div>
          <h3 class="title-place">SCUOLA</h3>
        </div>
      </div>
      <div class="col-md-3">
        <div class="single-place">
          <div class="percentage-content">
            <figure class="img-place">
              <img src="@/assets/img/palace.png" />
            </figure>
            <div class="percentage-line-first" style="--percentage:90%;">

            </div>
          </div>
          <h3 class="title-place">SCUOLA</h3>
        </div>
      </div>
      <div class="col-md-3">
        <div class="single-place">
          <div class="percentage-content">
            <figure class="img-place">
              <img src="@/assets/img/palace.png" />
            </figure>
            <div class="percentage-line-first" style="--percentage:90%;">

            </div>
          </div>
          <h3 class="title-place">SCUOLA</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

  .single-place{
    text-align: center;
    min-height: 300px;
    height: 100%;
  }

  .container-leaderboards-musa{
    background: #fff;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .percentage-line-first{
    height: var(--percentage);
    width:30px;
    display: inline-block;
  }

  .percentage-line-first:after{
    content: '';
    width: 100%;
    height: 100%;
    background-image: var(--bgAn);
    background-position: center;
    background-size: cover;
    display: block;
  }

  .percentage-line-first{
    background: #ffc700;
  }

  .single-place img{
    width: 100%;
    max-width: 50px;
  }

  .img-place{
    display: inline-block;
    margin: 0 10px 0 0;
  }

  .title-place{
    text-transform: uppercase;
    font-size: 18px;
    margin-top: 15px;
    color: #12638d;
  }

  .percentage-content{
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
  }



</style>
