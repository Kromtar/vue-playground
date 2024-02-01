<template>
  <div class="test">
    <h1>{{title}}</h1>
    <input type="text" ref="input1"> <!--Creamos una referencia-->
    <button @click="handleClickRef" >Click para probar ref y hacer focus</button>
    <p>Teste en italic, usando css del style root</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "TEST"
    }
  },
  methods: {
    handleClickRef() {
      console.log(this.$refs.input1)
      this.$refs.input1.focus() //Aquí podemos usar métodos de JS normales para interactuar con la referencia 
    }
  }
}
</script>

<style scoped>
  .test {
    text-align: center;
  }
  div h1 {
    margin: 0;
    padding: 10px;
  }
</style>