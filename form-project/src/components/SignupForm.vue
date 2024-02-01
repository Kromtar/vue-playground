<template>
  <form @submit.prevent="handleSubmit"> <!--Para manejar el envió del formulario. Con prevent no ejecutamos el comportamiento de refresco por defecto de un submit-->
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password"> <!--v-model nos serve para hacer "two-way" binding, de esta manera queda sincronizado en los dos sentidos-->
    <span v-show="passwordError">{{ passwordError }}</span>

    <br>
    <br>
    <label>Role:</label>
    <select v-model="role"> <!--two-way con un selector-->
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <br>
    <label>Skills (escribe algo y aprieta Enter)</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" @keydown.enter.prevent> <!-- Evento que usa enter--> <!--Añadimos un prevent para no ejecutar el submit-->
    <div :key="skill" v-for="skill in skills" class="pill" > <!--Ojo que tenemos que tenemos que asignar una key (bind) para render valores únicos-->
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <br> <!--two-way con un check, modo 2. Usando un array de almacenamiento, para multiples checks-->
    <label>Only Test</label>
    <div>
      <input type="checkbox" value="fede" v-model="names">
      <label>Fede</label>
      <input type="checkbox" value="salo" v-model="names">
      <label>Salo</label>
      <input type="checkbox" value="koke" v-model="names">
      <label>Koke</label>
    </div>

    <br> <!--two-way con un check, modo 1, usando un boleando, para solo 1 check-->
    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Vende tu alma al diablo</label>
    </div>

    <div class="submit">
      <button>Create</button>
    </div>

  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        role: "developer", //Opción por defecto
        terms: false,
        names: [], //Modo de almacenamiento de multiples check
        tempSkill: '',
        skills: [],
        passwordError: '' //Para dar feedback
      }
    },
    methods: {
      addSkill(e) {
        if(e.key == "Enter" && this.tempSkill){
          if(!this.skills.includes(this.tempSkill)){
            this.skills.push(this.tempSkill)
          }
          this.tempSkill = ""
        }
      },
      deleteSkill(skillToDelete) {
        this.skills = this.skills.filter((skill) => skill != skillToDelete)
      },
      handleSubmit() {
        this.passwordError = this.password.length > 5 ? '' : 'La clave es muy corta';
        if(!this.passwordError){
          console.log("Enviando :)")
        }
      }
    }
  }
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    max-width: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: green;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
</style>