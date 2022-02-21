<template>
  <div class="h-screen bg-gray-100">
  <!-- Full width column -->
    <div class="flex flex-col h-full">
      <div class="flex mb-4 flex-grow-0 h-20">
        <div class="w-full bg-blue-500 h-20"></div>
      </div>

      <!-- Three columns -->
      <div class="flex flex-row flex-grow mb-12">
        <div class="w-4/12 h-full flex flex-col">
          <logs class="flex-grow"></logs>
          <log-input></log-input>
        </div>
        <div class="w-2/12 bg-white rounded-md h-full">
          <tickets></tickets>
        </div>
        <div class="w-6/12  h-full">
          <ticket-details></ticket-details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logs from './components/Logs.vue'
import Tickets from './components/Tickets.vue'
import TicketDetails from './components/TicketDetails.vue'
import LogInput from './components/LogInput.vue'

export default {
  components: {
    Logs,
    Tickets,
    TicketDetails,
    LogInput
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
