<template>
  <!--Esto esta fuera del renderizado de rutas-->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <!--Test de interacción con API del historial-->
  <button @click="redirect">Redirect</button>
  <button @click="goBack">Go back</button>
  <button @click="goForward">Go forward</button>

  <!--Aquí se inyecta la ruta-->
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'about' }) //Para direccionar programaticamente
    },
    goBack() {
      this.$router.go(-1) //Para acceder a los métodos del reuter y retroceder 1 en el historial
    },
    goForward() {
      this.$router.go(1) 
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
