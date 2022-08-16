const  mongoose=require('mongoose')
const stuSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNo:{
        type:Number,
        min:0,max:60
    },
    class:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        
    }
})
module.exports=mongoose.model("stdMark",stuSchema)