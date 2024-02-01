<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div :key="job.id" v-for="job in jobs" class="job">
      <router-link :to="{ name: 'jobDetail', params: { id: job.id} }"><!--Ir a URL con params-->
        <h2>{{ job.jobName }}</h2>
      </router-link> 
    </div>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then(data => this.jobs = data)
      .catch((err) => console.error(err))
  }
}
</script>

<style>
  .job h2 {
    background: rgb(245, 225, 225);
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a {
    text-decoration: none;
  }
</style>