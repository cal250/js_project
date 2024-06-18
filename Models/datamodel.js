const mongoose=require('mongoose')

 
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    name:{
        type:String,
        required:true,
    
    },
    shop:{
        type:String,
        required:true,
        
    },

    Meeting:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true
    },
     
    date:{
        type:Date,
        default:Date.now,
    }
})


const dataModal=mongoose.model('Data',dataSchema);
module.exports=dataModal;