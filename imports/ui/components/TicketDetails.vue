<template>
<div class="flex flex-col px-3 h-full">
  <div class="w-full bg-blue-200 rounded-md p-5 text-blue-500 font-bold">
    <div class="grid lg:grid-cols-2 gap-6">
      <input v-on:input="updateTicket" v-model="ticket.title" placeholder="Title" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      <select v-on:change="updateTicket" v-model="ticket.status" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="cars" id="cars">
        <option value="New">New</option>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
      </select>
      <select v-on:change="updateTicket" v-model="ticket.owner" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="cars" id="cars">
        <option value="1234">TBD Users</option>
      </select>
      <select v-on:change="updateTicket" v-model="ticket.priority" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="cars" id="cars">
        <option value="1">High</option>
        <option value="2">Normal</option>
        <option value="3">Low</option>
      </select>
      <input v-on:input="updateTicket" v-model="ticket.location" placeholder="Location" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      <select v-on:change="updateTicket" v-model="ticket.parent" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="cars" id="cars">
        <option value="1234">TBD ParentTickets</option>
      </select>
    </div>
    <textarea v-on:input="updateTicket" v-model="ticket.description" placeholder="Description" class="shadow appearance-none  rounded w-full h-32 mt-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
  </div>
  <logs class="flex-grow"></logs>
  <log-input></log-input>
</div>
 
</template>

<script>

import Tickets from '../../api/collections/tickets.js';
import Logs from './Logs.vue';
import LogInput from './LogInput.vue';
import {debounce} from 'lodash'

export default {
  components: {
    Logs,
    LogInput
  },
  meteor: {
    $subscribe: {
      tickets: []
    },
    ticket() {
      return Tickets.findOne(Session.get('currentTicket'))
    }
  },
  created() {
    this.updateTicket = debounce(event => {
      Tickets.update({_id:this.ticket._id}, {$set:this.ticket})
    }, 500);
  },
  beforeUnmount() {
    this.updateTicket.cancel();
  }
}
</script>
