const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//var date=new Date();
//var today = new Date();


//addMinutes= (date, minutes) => new Date(new Date(date).getTime() + minutes*60000);

const exerciseSchema=new Schema({
    username:{type:String,required:true},
    task:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    createdAt: {type: Date,expires:'1m',default: Date.now},
  //  expireAt: {type: Date,default: today.setMinutes(today.getMinutes()+1)},
      
    //date:{type:Date,required:true},
},{
timestamps:true,
});
//exerciseSchema.index({createdAt: 1},{expireAfterSeconds: 3600});
//exerciseSchema.index({"lastModifiedDate": 1 },{ expireAfterSeconds: 20 });


const Exercise=mongoose.model('Exercise',exerciseSchema);
module.exports=Exercise;