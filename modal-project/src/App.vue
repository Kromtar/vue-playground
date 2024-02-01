<template>
  <TestA/>
  <div v-if="showModal">
    <Modal 
      :header="header"
      :text="text"
      :lista="lista"
      theme="sale"
      @closeModal="toggleModal" 
    > <!--Pasamos props de diversas maneras y reaccionamos a eventos del hijo. Si no usamos ":" en las props, estamos limitados a str-->
    
      <!--Esto es pasado al slot por defecto-->
      <div>
        <p>Esto esta siendo pasado como un slot</p>
        <p>Los slot están pensado para pasar estructuras para ser renderizadas dentro de un hijo</p>
      </div>

      <!--Esto es pasado a un slot con nombre link-->
      <template v-slot:links>
        <a href="#">Esto es parte de un slot pero pasado mediante el sistema de nombre</a>
      </template>
      
    </Modal>
  </div>

  <!--Segundo modal, usamos teleport para hacer un ejemplo del sistema. Se esta haciendo el render en otra parte nada q ver. Ojo con los estilos-->
  <teleport to=".teleportModal" v-if="showModal2">
    <Modal 
      :header="header"
      @closeModal="toggleModal2" 
    /> 
  </teleport>

  <button @click="toggleModal">Mostrar Modal</button>
  <button @click="toggleModal2">Mostrar Modal2</button>
</template>

<script>
import Modal from "./components/Modal.vue"
import TestA from "./components/TestA.vue"

export default {
  name: 'App',
  components: {
    Modal,
    TestA
  },
  data() {
    return {
      header: "Este es un texto para el titulo",
      text: "Este es el texto del mensaje",
      lista: ["A", "B", "C"],
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app {
  background: rgb(201, 201, 201);
}
p {
  font-style: italic;
}
</style>
