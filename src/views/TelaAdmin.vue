<template>
  <div class="TelaAdmin">
    <h1>Configurações</h1>
    <h3>Numero Maximo de Acessos Simultaneos</h3>
    <input type="number" v-model="acessosSimultaneo">
    <h3>Numero Maximo de Acessos Por Pessoa</h3>
    <input type="number" v-model="qtdVisita">
    <h3>Tempo Maximo de Permanencia</h3>
    <input type="text" v-model="slotTempo">
    <h3>Horario de Funcionamento</h3>
    <input type="text" v-model="minTime">
    <input type="text" v-model="maxTime">
    <h3>Comunicação com Cliente</h3>
    <button @click="salvar(),atualizarBancoBanco()">Salvar</button>
    <br>
    <button @click="contactarCliente" >Contactar Cliente</button>
    <br>
    <button @click="voltar">Voltar</button>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require("axios");
export default {
  name: "TelaAdmin",
  data:function(){
    return {
      minTime: '',
      maxTime: '',
      slotTempo:'',
      qtdVisita:0,
      acessosSimultaneo:0
    }
  },
  components: {},
  mounted(){
      this.minTime = this.$store.state.minTime
      this.maxTime = this.$store.state.maxTime
      this.slotTempo = this.$store.state.slotTempo
      this.qtdVisita = this.$store.state.qtdVisita
      this.acessosSimultaneo = this.$store.state.acessosSimultaneo
  },
  methods: {
    voltar: function() {
      this.$router.push({ name: "Calendario", params: {} });
    },
    contactarCliente: function(){
        this.$router.push({ name: "ContactarCliente", params: {} });
    },
    salvar: function(){
      let regeMinTime = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.exec(this.minTime);
      let regeMaxTime = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.exec(this.maxTime);
      let regeSlotTempo = /(?:[012345]\d):(?:[012345]\d)/.exec(this.slotTempo);
      if ( this.minTime == regeMinTime && this.maxTime == regeMaxTime && this.slotTempo == regeSlotTempo) {
        console.log("passou aqui! " + "Original: " + this.slotTempo + " RegeEX: " + regeSlotTempo)
        this.$store.state.minTime = this.minTime
        this.$store.state.maxTime = this.maxTime
        this.$store.state.slotTempo = this.slotTempo
        this.$store.state.qtdVisita = this.qtdVisita
        this.$store.state.acessosSimultaneo = this.acessosSimultaneo

        this.$store.state.configuracao.InicioFuncionamento = this.minTime
        this.$store.state.configuracao.FimFuncionamento = this.maxTime
        this.$store.state.configuracao.TempoPermanencia = this.slotTempo
        this.$store.state.configuracao.NrMaxPessoas = this.acessosSimultaneo

      /*
      Tentando atualizar pelo banco de dados
      configuracao:[]
      axios.get("http://localhost:61532/api/config/1").then(resp => this.configuracao = resp.data)
      this.$store.state.configuracao = this.configuracao
      */

      this.$router.push({ name: "Calendario", params: {} });
      }else {
        console.log(this.slotTempo + " " + regeSlotTempo)
        alert("É necessario digirar horarios validos. EX : 00:00:00")
      }
    },
    atualizarBancoBanco: function(){
      let regeMinTime = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.exec(this.minTime);
      let regeMaxTime = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.exec(this.maxTime);
      let regeSlotTempo = /(?:[012345]\d):(?:[012345]\d)/.exec(this.slotTempo);
      if ( this.minTime == regeMinTime && this.maxTime == regeMaxTime && this.slotTempo == regeSlotTempo) {
        let config = {
        nrMaxPessoas: this.acessosSimultaneo,
        tempoPermanencia: this.slotTempo,
        InicioFuncionamento: this.minTime,
        fimFuncionamento: this.maxTime
      }
      console.log(config);
      axios.put("http://localhost:61532/api/config/admin",config).then(resp => console.log(resp.data))
      }
      
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

