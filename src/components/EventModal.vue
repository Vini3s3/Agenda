<template>
  <div>
      {{text}}
      <fieldset>
          <legend>Event details</legend>
          <b>Id</b>  {{ event.id }} <br>
          <b>Title</b>  {{ event.title }} <br>
          <b>Start</b>  {{ event.start }} <br>
          <b>End</b>  {{ event.end }} <br>
      </fieldset>
      <fieldset>
          <legend>Edit Event</legend>
          <input type="text" v-model="title">
          <input type="date" v-model="start">
          <input type="date" v-model="end">

          <button @click="updateEvent">Edit</button>
          <button @click="Excluir">Excluir</button>
      </fieldset>
  </div>
</template>

<script>
//import {mapGetters} from 'vuex'
export default {
    data: () => ({
        title: "",
        start: {},
        end: {} 
    }),
    props: {
        text: String,
        event: Object
    },
    mounted() {
        this.title = this.event.title;
        this.start = formatDate(this.event.start);
        this.end = formatDate(this.event.end);
        this.startEx = this.event.start;
    },
    methods: {
        updateEvent() {
            this.$store.commit("UPDATE_EVENT", {
                id: this.event.id,
                title: this.event.title,
                start: this.start,
                end: this.end
            })
        },
        Excluir(){
            this.$store.commit("EXCLUIR", {
                id: this.event.id,
                start: this.startEx
            })
        }
    }
    /*
    computed:{
        ...mapGetters(["EVENT"])
    }
    */
};
function formatDate(date) {
    var options = {year: "numeric", month: "2-digit", day: "2-digit"};
    let string = date.toLocaleDateString("ko-KR",options ).replace(/\. /g,"-")
    return string.substr(0, string.length - 1)
}
</script>

<style>

</style>