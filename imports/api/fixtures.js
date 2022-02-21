import { Meteor } from 'meteor/meteor';
import Logs from './collections/logs.js';
import Tickets from './collections/tickets.js';
import Handles from './collections/handles.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Logs.find().count() === 0) {
    const data = [
      {
        message: 'Auto staat in de sloot',
        handles: ["Bata-101"],
        updatedBy: "Tim Jongsma"
      },
      {
        message: 'Auto staat in de sloot',
        handles: ["Bata-101"],
        updatedBy: "Tim Jongsma"
      },
      {
        message: 'Auto staat in de sloot',
        handles: ["Bata-101"],
        updatedBy: "Tim Jongsma"
      },
    ];

    data.forEach(log => Logs.insert(log));
  }
});
