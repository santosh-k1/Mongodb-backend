const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.js');
const ObjectId = require('mongoose').Types.ObjectId
router.get('/',(req, res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log('Error in get Data'+err)
          }
          else{
              res.send(doc)
          }   
    })
})

router.get('/:id',(req, res)=>{
   if(ObjectId.isValid(req.params.id)){
    Employee.findById(req.params.id,(err,doc)=>{
        if(err){
            console.log('Error get by id'+err)
          }
          else{
              res.send(doc)
          } 
    })
   }
   else{
       return res.status(400).send('No Record found for' + req.params.id)
   }
})
//delete API
router.delete('/:id',(req, res)=>{
    if(ObjectId.isValid(req.params.id)){
     Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
         if(err){
             console.log('Error get in delete by id'+err)
           }
           else{
               res.send(doc)
           } 
     })
    }
    else{
        return res.status(400).send('No Record found for' + req.params.id)
    }
 })
 
//put API
router.put('/:id',(req, res)=>{
    if(ObjectId.isValid(req.params.id)){

        let emp ={
                name:req.body.name,
                position:req.body.position,
                dept:req.body.dept,
            };

     Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
         if(err){
             console.log('Error update API by id'+err)
           }
           else{
               res.send(doc)
           } 
     })
    }
    else{
        return res.status(400).send('No Record found for' + req.params.id)
    }
 })


router.post('/',(req, res)=>{
    let emp = new Employee(
        {
            name:req.body.name,
            position:req.body.position,
            dept:req.body.dept,
        }
    )
  emp.save((err, doc)=>{
      if(err){
        console.log('Error in post Data'+err)
      }
      else{
          res.send(doc)
      }
  })  
})
module.exports = router;
