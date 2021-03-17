<template>
  <div>
      <Fullcalendar 
      locale="br"
        defaultView='timeGridWeek'
        :plugins="calendarPlugins"
        :header="{
            left:'title',
            center:'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
            right:'prev today next'
        }"
        :weekends="false"
        :slotDuration='this.configuracao.TempoPermanencia'
        :slotLabelInterval="this.configuracao.TempoPermanencia"
        :minTime="this.configuracao.InicioFuncionamento"
        :maxTime="this.configuracao.FimFuncionamento"
        selectable="true"
        :editable="true"
        :events="EVENTS"
        @select="handleSelect" 
        @eventClick="handleClick"
        @eventRender="renderEvent"
      />

      <modals-container/>
      <!--
          @eventDrop="dropEvent"
        
        @eventResize="updateEvent"

          
          :buttonText="{
            today:'Hoje',
            month:'Mes',
            week:'Semana',
            day:'Dia',
            list:'Lista'
        }"
      -->
  </div>
</template>

<script>
require('@fullcalendar/core/main.min.css')
require('@fullcalendar/daygrid/main.min.css')
require('@fullcalendar/timegrid/main.min.css')

import Fullcalendar from '@fullcalendar/vue'
import DayGridPlugin from '@fullcalendar/daygrid'
import TimeGridPlugin from '@fullcalendar/timegrid'
import InteractionPlugin from '@fullcalendar/interaction'
import ListPlugin from '@fullcalendar/list'

import {mapGetters} from 'vuex'
import EventModal from './EventModal'
import CommentsModal from './CommentsModal'

export default {
    data: ()=> ({
        cpf:'000.000.000.000',
        calendarPlugins: [
            DayGridPlugin,
            TimeGridPlugin,
            InteractionPlugin,
            ListPlugin
        ],
        configuracao:[]
    }),
    mounted(){
        this.configuracao = this.$store.state.configuracao
    },
    components: {
        Fullcalendar
    },
    computed:{
        ...mapGetters(["EVENTS"])
    },
    methods: {
        renderEvent(arg){
            let span = document.createElement('span')
            span.setAttribute('class', 'fa fa-comments')
            arg.el.appendChild(span)
            span.addEventListener('click', event => {
                event.stopPropagation();
                this.$modal.show(CommentsModal, {
                    text: "this is for the comments"
                })
            })
        },
        /*updateEvent(arg){
            this.$store.commit("UPDATE_EVENT", arg.event)
        },*/
        handleSelect(arg){
            this.$store.commit("ADD_EVENT",{
                //id:(new Date()).getTime(),
                id:this.cpf,
                title: "Visita",
                start: arg.start,
                end: arg.end,
                allDay: arg.allDay
            })
        },
        handleClick(arg){
            //this.$modal.show(EventModal)
            this.$modal.show(EventModal, {
                text: "This is from the component",
                event: arg.event
            })
        }
    }
}
</script>

<style>

</style>