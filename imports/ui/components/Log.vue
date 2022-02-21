<template>
    <div class="col-start-1 col-end-8 p-3 rounded-lg">
        <div class="flex flex-row items-center">
          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
            L
          </div>
          <div class="relative flex-initial w-48 ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>{{this.log.message}}</div>
            <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
              {{this.log.updatedBy}} - {{this.log.updatedAt | formatDate}}
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["log"]
}
</script>