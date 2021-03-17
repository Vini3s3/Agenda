<template>
  <div class="TelaAdmin">
    <h1>Contato</h1>
    <h3>Email</h3>
    <input type="email">
    <h3>Texto</h3>
    <input type="text" style="height: 200px; width: 400px;"><br>
    <button>Enviar Email</button><br>
    <button @click="voltar">Voltar</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TelaAdmin",
  components: {},
  methods: {
    voltar: function() {
      this.$router.push({ name: "TelaAdmin", params: {} });
    },
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

