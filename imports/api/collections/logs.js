import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
this.Logs = new Mongo.Collection('logs');

this.logSchema = new SimpleSchema({
    message: {type: String},
    handles: {type: Array},
    'handles.$': {type: String},
    actionPerformed: {
        type: Boolean,
        optional: true
    },
    updatedBy: {
        type: String,
        autoValue: function() {
            return "123456";
        },
    },  
    updatedAt: {
        type: Date,
        autoValue: function() {
            if(this.isInsert){
                return new Date();
            }
        }
    },  
});

Logs.attachSchema(this.logSchema);

Logs.allow({
    insert() { return true; },
    update() { return true; }
});

Logs.before.insert(function (userId, doc) {
    // doc.handles.forEach(function(handle_id){
    //     Handles.update(handle_id,{$set:{lastLog:new Date()}});
    // })
});

export default Logs;
