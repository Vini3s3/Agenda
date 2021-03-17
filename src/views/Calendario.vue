<template>
  <div class="Calendario">
    <h1>Calendario</h1>
    <button @click="voltar">Voltar</button>
    <button @click="telaAdmin">Tela Admin</button>
    <agenda/>
  </div>
</template>

<script>
// @ is an alias to /src
import Agenda from "../components/Agenda.vue"
export default {
  name: "Calendario",
  components: {
    Agenda
  },
  methods: {
    voltar: function() {
      this.$router.push({ name: "Home", params: {} });
    },
    telaAdmin: function() {
      this.$router.push({ name: "TelaAdmin", params: {} });
    }
  }
};
</script>
<style>
label {
  color: white;
  font-size: 20px;
}
input {
  margin-left: 20px;
  left: 40px;
  margin-top: 10px;
}
button {
  margin-left: 20px;
  left: 40px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
}
</style>

