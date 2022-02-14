<template lang="html">
  <main class="main">
    <Header></Header>
  </main>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="css" scoped>
  main{
    background: #e0fffb;
    height: 100vh
  }
</style>
