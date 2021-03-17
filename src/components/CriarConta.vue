<template>
  <button @click="criarConta">Criar Connta</button>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  computed: {},
  methods: {
    criarConta: function() {
      this.$router.push({ name: "Cadastro", params: { } });
    }
  }
};
</script>

<style>
</style>