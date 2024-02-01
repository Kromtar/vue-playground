<template>
  <div v-if="job">
    <h1>Job Detail</h1>
    <p>The Job name is {{ job?.jobName }}</p> 
    <p>{{ job?.detail }}</p> 
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<script>
export default {
  props: ['id'], //Para obtener los parámetros de la url, 2do modo (necesita mas config en el router)
  data() {
    return {
      //id: this.$route.params.id //Para conectarnos a los parámetros de la URL mediante la ruta, 1er modo
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then(data => this.job = data)
      .catch((err) => console.error(err))
  }
}
</script>