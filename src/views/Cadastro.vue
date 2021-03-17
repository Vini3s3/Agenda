<template>
  <div class="Cadastro">
    <h1>Cadastro</h1>
    <label for="nome">Nome</label>
    <input v-model="nome" id="nome" type="text" placeholder="Insira seu nome completo">
    <br>
    <label for="CPF">CPF</label>
    <input v-model="cpf" type="number" id="CPF" placeholder="Informe seu CPF">
    <br>
    <label for="senha">Senha</label>
    <input v-model="senha" type="password" id="senha" placeholder="informe sua senha">
    <br>
    <label for="email">Email</label>
    <input v-model="email" type="email" id="email" placeholder="informe seu email">
    <br>
    <label for="tel">Telefone</label>
    <input v-model="telefone" type="text" id="tel" placeholder="informe seu telefone">
    <br>
    <button @click="Cadastrar">Cadastrar</button>
    <button @click="voltar">Voltar</button>
  </div>
</template>

<script>
// @ is an alias to /src

const axios = require("axios");

export default {
  name: "Cadastro",
  data: function(){
    return{
      nome: '',
      cpf: '',
      senha:'',
      email:'',
      telefone: ''
    }
  },
  components: {
  },
  methods: {
    voltar: function() {
      this.$router.push({ name: "Home", params: { } });
    },
    Cadastrar: function() {
      let pessoa =  {
          nome: this.nome,
          cpf: this.cpf,
          senha: this.senha,
          email: this.email,
          telefone: this.telefone,
          admin: 0
        }

      console.log(pessoa)        
      axios.post("http://localhost:61532/api/Pessoa", pessoa).then(resp => console.log(resp.data))
    }
  }
};
</script>
<style>
label{
  color: white;
  font-size: 20px;
  
}
input{
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

