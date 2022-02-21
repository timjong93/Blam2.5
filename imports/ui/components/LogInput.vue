<template>
  <div class="flex-grow-0 h-402 pl-5 pr-5">
    <div class="flex flex-row items-center h-36 rounded-xl bg-white w-full px-4">
          <div class="flex-grow ml-4">
            <div class="relative w-full">
              <input type="text" v-model="newLog" class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-24">
            </div>
          </div>
          <div class="ml-4">
            <button @click="submitLog" class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 w-full">
              <span>Log</span>
              <span class="ml-2">
                <svg class="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </span>
            </button>
            <button @click="submitTicket" class="mt-4 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 w-full">
              <span>Ticket</span>
              <span class="ml-2">
                <svg class="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
  </div>
</template>

<script>

import Logs from '../../api/collections/logs.js';
import Tickets from '../../api/collections/tickets.js';
import Handles from '../../api/collections/handles.js';
import Log from './Log.vue'
export default {
meteor: {
    $subscribe: {
      handles: [],
      tickets: []
    }
  },
  data() {
    return {
      newLog: ""
    }
  },
  methods: {
    submitLog() {
      Logs.insert({message:this.newLog, handles:[], updatedBy:"Tim Jongsma"})
      this.newLog = ""
    },
    submitTicket() {     
      let logHandles = [];
      
      let message = this.newLog;
      if(!message) return;
      let messageHandles = message.match(/(BATA-[0-9]*)/ig);
      
      if (messageHandles) {
          messageHandles.forEach(function(handle){
              var handle = Handles.findOne({callsign:{'$regex':handle, '$options' : 'i'}})
              logHandles.push(handle._id);
          });
      }
      
      Logs.insert({
          message: message,
          handles:logHandles
      }, (err, result) => {
          Tickets.insert({
              logs:[result],
              handles:logHandles
          }, (err,result) => {
            console.log(err)
          });
      });
        
    }
  },

  
}
</script>
