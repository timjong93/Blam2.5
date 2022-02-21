import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
this.Handles = new Mongo.Collection('handles');

this.handleSchema = new SimpleSchema({
  callsign: {type: String},
  name: {type: String},
  subnet: {type:String},
  motoTrboId: {type:String, optional:true},
  lastLog: {
    type: Date,
    optional: true,
    },
  icon: {
    type: String,
    allowedValues: ['car', 'bus', 'bicycle','motorcycle','ambulance','user','laptop'],
  },
  lastLogLimit: {
    type: Number,
    label: "Time limit for notification if no interaction is logged in minutes, empty means disable notification",
    optional: true
  }
});

Handles.attachSchema(this.handleSchema);

Handles.allow({
  update() { return true; }
});

export default Handles;