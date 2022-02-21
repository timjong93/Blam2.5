<template>
  <div class="p-3">
      <Log 
      v-for="log in logs" 
      v-bind:key="log._id"
      v-bind:log="log"
      ></Log>
  </div>
</template>

<script>

import Logs from '../../api/collections/logs.js';
import Log from './Log.vue'
import LogInput from './LogInput.vue'

export default {
  components: {
    Log,
    LogInput
  },
meteor: {
    $subscribe: {
      logs: []
    },
    logs() {
      return Logs.find({}, { sort: { createdAt: -1 } }).fetch();
    }
  }
}
</script>
