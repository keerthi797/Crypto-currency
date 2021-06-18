const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let Currency=new Schema({
    crypto_name:{
        type:String
    },
    symbol:{
        type:String
    },
    logo:{
        type:String
    },
    marketcap:{
       type:Number
    }

   },{
       collection:'currency'
   })
module.exports=mongoose.model('Currency', Currency)