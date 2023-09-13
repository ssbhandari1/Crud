const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel = require('./models/User')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/crud')

app.get('/',async(req,res)=>{
    try {
        const response=await UserModel.find({})
        res.json(response)
    } catch (error) {
       res.json(error) 
    }
})
app.post('/',async(req,res)=>{
    const users=new UserModel(req.body)
    try {
        const response=await users.save()
        res.json(response)
    } catch (error) {
       res.json(error) 
    }
})
app.put('/:id',async(req,res)=>{
  const id=req.params.id

    try {
        const response=await UserModel.findByIdAndUpdate({_id:id},{
            name:req.body.name,
            email:req.body.email,
            age:req.body.age
        })
        console.log(response)
        res.json(response)

    } catch (error) {
       res.json(error) 
    }
})
app.delete('/:id',async(req,res)=>{
    const id=req.params.id
  console.log(req.params)
      try {
          const response=await UserModel.findByIdAndDelete({_id:id})
          console.log(response)
          res.json(response)
  
      } catch (error) {
         res.json(error) 
      }
  })
app.listen(3001,()=>{
    console.log('Server Started')
})