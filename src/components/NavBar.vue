<template>
  <div id="header">
    <header>
      <nav>
        <ul>
          <li class="nav-item" >
            Accueil
          </li>
          <li class="nav-item" >
            Ajouter un bien
          </li>
          <li class="nav-item" >
            Quittances générées
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #00B0FF;
}
</style>
