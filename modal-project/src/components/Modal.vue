<template>
  <div class="backdrop" @click.self="closeModal"> <!--usamos self para que solo detectemos el evento de este div y no de su hijos-->
    <div class="modal" :class="{ sale: theme == 'sale' }"> <!--de esta manera podemos cambiar dinamicamente clases-->
      <h3>{{ header }}</h3>
      <p>{{ text }}</p>
      <ul>
        <li v-for="item in lista">
          {{ item }}
        </li>
      </ul>
      <slot></slot> <!--Slot por defecto (sin usar nombres)-->
      <div style="margin: 20px;">
        <slot name="links"></slot> <!--Uso de slot con nombre-->
      </div>
      <div style="margin: 20px;">
        <slot name="otherSlot">DefaultContent</slot> <!--Contenido de slot por defecto si no pasamos nada-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header','text','lista','theme'],
  methods: {
    closeModal() {
      this.$emit('closeModal') //Emitimos eventos a padres
    }
  }
}
</script>

<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    text-align: center;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal.sale {
    background: rgb(169, 255, 168);
  }
</style>