<template>
<div>
  <div class="w-full h-12 bg-blue-200 rounded-t-md py-3 px-5 text-blue-500 font-bold">New</div>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col w-full p-4">
      <Ticket 
        v-for="ticket in newTickets" 
        v-bind:key="ticket._id"
        v-bind:ticket="ticket"
      ></Ticket>
    </ul>
  </div>
  <div class="w-full h-12 bg-blue-200 py-3 px-5 text-blue-500 font-bold">Active</div>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col w-full p-4">
        <Ticket 
        v-for="ticket in openTickets" 
        v-bind:key="ticket._id"
        v-bind:ticket="ticket"
      ></Ticket>
    </ul>
  </div>
  <div class="w-full h-12 bg-blue-200 py-3 px-5 text-blue-500 font-bold">Closed</div>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col w-full p-4">
        <Ticket 
        v-for="ticket in closedTickets" 
        v-bind:key="ticket._id"
        v-bind:ticket="ticket"
      ></Ticket>
    </ul>
  </div>
</div>
</template>

<script>

import Tickets from '../../api/collections/tickets.js';
import Ticket from './Ticket.vue'
export default {
  components: {
    Ticket
  },
meteor: {
    $subscribe: {
      tickets: []
    },
    newTickets() {
      return Tickets.find({status: "New"}, { sort: { createdAt: -1 } }).fetch();
    },
    openTickets() {
      return Tickets.find({status: "Open"}, { sort: { createdAt: -1 } }).fetch();
    },
    closedTickets() {
      return Tickets.find({status: "Closed"}, { sort: { createdAt: -1 } }).fetch();
    }
  },
  data() {
    return {
      newLog: ""
    }
  },
  methods: {
    submitLog() {
    }
  },

  
}
</script>
