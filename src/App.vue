<template>
  <div id="app">
    <NavBar/>
    <main>
      <HomePage :msg="message" />
    </main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    HomePage, NavBar
  },
  data(){
    return {
      message: 'Quittance Generator'
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
body {
  background: linear-gradient(to bottom, #fff, #ccc);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-width: 300px;
}
</style>
