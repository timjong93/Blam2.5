import { Meteor } from 'meteor/meteor';
import Tickets from '../collections/tickets.js';

Meteor.publish('tickets', function ticketPublication() {
    return Tickets.find();
});