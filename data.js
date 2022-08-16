const model =require("../model/modeldata")

        
async function postdata(req,res){                       //post method using postman
    const stdC={
        name:req.body.name,
        rollNo:req.body.rollNo,
        class:req.body.class,
        marks: req.body.marks
    }
    const db =await  model.create(stdC)
   return res.status(200).send({
    msg:'ok',
    data:db
    })
}
//get method using postman
async function getData(req, res) {
   
    const data = await model.findById(req.body.id)
    return res.status(200).send({
        msg:"ok",
        data:data
    })
}

async function deletedata(req,res){                                 //delete method using in postman
    const stdata =await  model.findByIdAndDelete(req.body.id)
   return res.status(200).send({
    msg:'ok',
    data:stdata
    })
}

async function updatedata(req,res){     
     let chekUser = await model.findOne({_id:req.body._id}) 
     if(chekUser){
       let change = await model.findOneAndUpdate({_id:req.body._id},{
         name:req.body.name,
        rollNo:req.body.rollNo,
        class:req.body.class,
        marks: req.body.marks
    },{upsert:true, new:true})
        return res.status(200).send({
            msg:"ok",
            data:change
         })
     }
    }




module.exports ={
    postdata,
    getData,
    deletedata,
    updatedata
}

