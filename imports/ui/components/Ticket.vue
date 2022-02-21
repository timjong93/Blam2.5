<template>
  <li @click="setCurrentTicket" class="border-green-400 flex flex-row w-full mb-2">
    <div class="select-none cursor-pointer bg-gray-100 rounded-md flex w-full items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">TJ</div>
      <div class=" pl-1 w-full">
        <div class="font-medium">{{this.ticket.title}}</div>
        <div class="flex flex-row">
          <div class="text-gray-600 text-sm w-2/3">{{this.ticket.location}}</div>
          <div class="text-gray-600 text-sm w-1/3 text-right">{{this.ticket.updatedAt | formatTime}}</div>
        </div>
      </div>

    </div>
  </li>
</template>

<script>

export default {
  props: ["ticket"],
  methods: {
    setCurrentTicket() {
      Session.set('currentTicket', this.ticket._id)
    }
  }
}
</script>
