import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
    triggerLocationRefresh(radioId){
      HTTP.call('PUT', Meteor.settings.motoTrboApi, {
        data: {
          radio: radioId
        }
      }, 
      (err,res)=>{
        if(!err){
          console.log(`Succesfully triggered refresh for ${radioId}`);
        }else{
          console.error(`Error while triggering refresh for ${radioId}`);
          console.error(err);
        }
      });
    }
  })
