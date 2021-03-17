<template>
  <div class="home">
    <h1>Bem vindo!</h1>
    <h2>Faça login para entrar</h2>
    <div class="Login">
      <input type="text" placeholder="Login" />
      <br />
      <input type="password" placeholder="Senha" />
      <br />
      <button @click="efetuarLogin">Entrar</button>
      <br />
    </div>
    <a @click="criarConta">Criar Conta</a>
    
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require("axios");
export default {
  name: "Home",
  data:function(){
    return{
      configuracao:[]
    }
  },
  components: {
  },
  created: function () {
      axios.get("http://localhost:61532/api/config/1").then(resp => this.configuracao = resp.data)
  },
  methods: {
    criarConta: function() {
      this.$router.push({ name: "Cadastro", params: { } });
    },
    efetuarLogin: function(){
      this.$store.state.minTime = this.configuracao.InicioFuncionamento
      this.$store.state.maxTime = this.configuracao.FimFuncionamento
      this.$store.state.slotTempo = this.configuracao.TempoPermanencia
      this.$store.state.qtdVisita = this.configuracao.NrMaxVisitas
      this.$store.state.acessosSimultaneo = this.configuracao.NrMaxPessoas
      this.$store.state.configuracao = this.configuracao
      this.$router.push({ name: "Calendario", params: { } });
    }
  }
};
</script>
<style>
body {
  background: rgb(17, 87, 101);
  background: linear-gradient(
    90deg,
    rgba(17, 87, 101, 1) 0%,
    rgba(18, 107, 107, 1) 49%,
    rgba(20, 88, 102, 1) 100%
  );
}
.Login {
  padding: 10px;
  margin-top: 15%;
}
button {
  padding: 10px;
  border-radius: 10px;
}
input {
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
</style>
