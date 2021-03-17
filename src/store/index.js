import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moment = require("moment");
export default new Vuex.Store({
  state: {
    events: [],
    minTime: '',
    maxTime: '',
    slotTempo: '',
    qtdVisita: 10,
    acessosSimultaneo: 5,
    pessoaLogada: '000.000.000.000',
    qtdEvenPessoa: [],
    qtdEvenHorario: [],
    qtdPessoaMesmoHorario:[],
    configuracao:[]
  },
  getters: {
    EVENTS: state => state.events
  },
  mutations: {
    ADD_EVENT: (state, event) => {
      console.log(
      "Horario Começo"+
      state.minTime ,
      state.configuracao.InicioFuncionamento,

      "Horario Final",
      state.maxTime,
      state.configuracao.FimFuncionamento,

      "Slote Tempo"+
      state.slotTempo ,
      state.configuracao.TempoPermanencia,
      

      state.qtdVisita ,
      state.configuracao.NrMaxVisitas,

      state.acessosSimultaneo ,
      state.configuracao.NrMaxPessoas,
      
      state.configuracao
      )
      //state.qtdPessoaMesmoHorario = state.events.filter(_event => moment(_event.start).format("YYYY-DD-MM hh:mm:ss") == moment(event.start).format("YYYY-DD-MM hh:mm:ss") && event.id == state.pessoaLogada)
      //if(state.qtdPessoaMesmoHorario[0] != null){
      //  alert("Você já possui evento marcado para este horario!")
      //}else{
        state.qtdEvenPessoa = state.events.filter(_event => _event.id == state.pessoaLogada)
        if (state.qtdEvenPessoa.length >= state.qtdVisita) {
          console.log("É possivel marcar apenas " + state.qtdVisita + " visitas por semana")
        } else {
          state.qtdEvenHorario = state.events.filter(_event => moment(_event.start).format("YYYY-DD-MM hh:mm:ss") == moment(event.start).format("YYYY-DD-MM hh:mm:ss"))
          if (state.qtdEvenHorario.length >= state.acessosSimultaneo) {
            alert("Número maximo de clientes no mesmo horario exedido!")
          } else {
            state.events.push(event)
          }
        }
      //}
    },
    UPDATE_EVENT: (state, { id, title, start, end }) => {
      let index = state.events.findIndex(_event => _event.id == id)
      state.events[index].title = title
      state.events[index].start = start
      state.events[index].end = end
      console.log(moment(start).format("YYYY-DD-MM hh:mm:ss"))
    },
    EXCLUIR: (state, { id, start }) => {
      let index = state.events.findIndex(_event => _event.id == id &&
        moment(_event.start).format("YYYY-DD-MM hh:mm:ss")
        == moment(start).format("YYYY-DD-MM hh:mm:ss"))
      state.events.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
