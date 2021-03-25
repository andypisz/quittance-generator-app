<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <MainList/>
  </div>
</template>

<script>
import MainList from "./MainList";

export default {
  name: 'HomePage',
  components: {
    MainList,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
}
</style>
