<template>
<div class="flex flex-col px-3 h-full">
  <div class="w-full bg-blue-200 rounded-md p-5 text-blue-500 font-bold">
    <div class="grid lg:grid-cols-2 gap-6">
      <input placeholder="Title" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      <select class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="cars" id="cars">
        <option value="volvo">New</option>
        <option value="saab">Open</option>
        <option value="mercedes">Closed</option>
      </select>
      <input placeholder="Assignee" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      <input placeholder="Priority" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      <input placeholder="Location" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
      <input placeholder="Parent" class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
    </div>
    <textarea placeholder="Description" class="shadow appearance-none  rounded w-full h-32 mt-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
  </div>
  <logs class="flex-grow"></logs>
  <log-input></log-input>
</div>
 
</template>

<script>

import Tickets from '../../api/collections/tickets.js';
import Logs from './Logs.vue';
import LogInput from './LogInput.vue';

export default {
  components: {
    Logs,
    LogInput
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
  },
  methods: {
  },
}
</script>
