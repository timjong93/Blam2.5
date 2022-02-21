import Vue from 'vue'
import moment from 'moment'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })

  Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
  })
  Vue.filter('formatTime', function(value) {
    if (value) {
      return moment(String(value)).format('hh:mm A')
    }
  })
})
