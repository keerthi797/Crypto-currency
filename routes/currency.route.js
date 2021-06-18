const express=require('express');
const app=express();
const currencyRoute=express.Router()

//Student model
let Currency=require('../model/Currency');


//Add currency
currencyRoute.route('/add-currency').post((req,res,next)=>{
    Currency.create(req.body,(error,data)=>{
        if(error){
            return next (error)
        }else{
            res.send(data)
        }
    })
});
//Get all currency
currencyRoute.route('/').get((req,res,next)=>{
    Currency.find(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.send(data)
        }
    })
});

//Get a single currency
currencyRoute.route('/read-currency/:id').get((req,res)=>{
    Currency.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.send(data)
        }
    })
});
//update
currencyRoute.route('/update-currency/:id').put((req,res,next)=>{
    Currency.findByIdAndUpdate(req.params.id),{
        // $set=req.body
    },(error,data)=>{
        if(error){
            return next(error)
            console.log(error)
        }else{
            res.json(data)
            console.log('Currency successfully updated')
        }
    }
})
//delete
currencyRoute.route('/delete-currency/:id').delete((req,res,next)=>{
    Currency.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            return next (error);
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })

})
module.exports=currencyRoute;
