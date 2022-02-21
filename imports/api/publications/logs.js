import { Meteor } from 'meteor/meteor';
import Logs from '../collections/logs.js';

Meteor.publish('logs', function logPublication(limit, filter) {
    let query = {}
    if(filter && filter.length > 0){
        query = {'$or':[
            {message:{'$regex':filter, '$options' : 'i'}},
            {title:{'$regex':filter, '$options' : 'i'}}
        ]}
    }
    return Logs.find(
        query,
        {
            sort: {updatedAt: -1},
            limit: limit
        }
    );
});