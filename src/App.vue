<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="message" :subtitle="subtitle"/>
    <input type="text" v-model="subtitle" />
    <button @click="generate"> Générer </button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      message: 'Quittance Generator',
      subtitle: 'Génerez vos quittances facilement !'
    }
  },
  methods: {
    generate() {
      alert(this.subtitle)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
