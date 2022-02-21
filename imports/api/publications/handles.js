import { Meteor } from 'meteor/meteor';
import Handles from '../collections/handles.js';

Meteor.publish('handles', function handlePublication() {
    return Handles.find();
  });