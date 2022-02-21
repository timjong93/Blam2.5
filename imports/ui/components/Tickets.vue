<template>
<div>
  <div class="w-full h-12 bg-blue-200 rounded-t-md py-3 px-5 text-blue-500 font-bold">New</div>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col w-full p-4">
      <Ticket 
        v-for="ticket in tickets" 
        v-bind:key="ticket._id"
        v-bind:ticket="ticket"
      ></Ticket>
    </ul>
  </div>
  <div class="w-full h-12 bg-blue-200 py-3 px-5 text-blue-500 font-bold">Active</div>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col w-full p-4">
        <li class="border-gray-400 flex flex-row w-full mb-2">
          <div class="select-none cursor-pointer bg-gray-100 rounded-md flex w-full items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">TJ</div>
            <div class=" pl-1 w-full">
              <div class="font-medium">Boom Omgevallen</div>
              <div class="flex flex-row">
                <div class="text-gray-600 text-sm w-2/3">Etappe 12</div>
                <div class="text-gray-600 text-sm w-1/3 text-right">6:00 AM</div>
              </div>
            </div>

          </div>
        </li>
    </ul>
  </div>
  <div class="w-full h-12 bg-blue-200 py-3 px-5 text-blue-500 font-bold">Closed</div>
  <div class="container flex mx-auto w-full items-center justify-center">
    <ul class="flex flex-col w-full p-4">
        <li class="border-gray-400 flex flex-row w-full mb-2">
          <div class="select-none cursor-pointer bg-gray-100 rounded-md flex w-full items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">TJ</div>
            <div class=" pl-1 w-full">
              <div class="font-medium">Boom Omgevallen</div>
              <div class="flex flex-row">
                <div class="text-gray-600 text-sm w-2/3">Etappe 12</div>
                <div class="text-gray-600 text-sm w-1/3 text-right">6:00 AM</div>
              </div>
            </div>

          </div>
        </li>
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
    tickets() {
      return Tickets.find({}, { sort: { createdAt: -1 } }).fetch();
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
