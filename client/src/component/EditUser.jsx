import { Box, Button, Paper, Stack, TextField, Typography, useRadioGroup } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
const EditUser = () => {
    const {id}=useParams()
    const allUserData=useSelector((state)=>state.users)
const singleUser=allUserData?.users.find((user)=>user._id===id)
console.log(singleUser)
    const navigate=useNavigate()
  const[user,setUser]=useState({
    name:singleUser?.name,
    email:singleUser?.email,
    age:singleUser?.age,
 
  })





  const handleChange=(e)=>{
const name=e.target.name
const value=e.target.value
console.log(name,value)
setUser({...user,[name]:value})
  } 
  const handleEditUser=async()=>{
try {
    const res=await axios.put(`http://localhost:3001/${id}`,user)
    console.log(res.data)
 
    navigate('/')
} catch (error) {
    console.log(error)
}
  }
  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',color:'white',position:'relative'}}>
 
    <Paper elevation={20}>
        <Box sx={{width:300,height:400,background:'white',color:"black"}}>
        <Stack direction='column' justifyContent='space-evenly' alignItems='center' sx={{width:'100%',height:'100%'}}>
    
          
         <Typography variant='h6' sx={{fontWeight:'600',color:'red'}}>Update User</Typography>

         
 
        <TextField
              label=" Name"
              id="outlined-size-small"
       
              size="small"
              name='name'
              value={user.name}
              onChange={handleChange}
            />
             <TextField
              label="Email"
              id="outlined-size-small"
          //  type='file'
              size="small"
              name='email'
              value={user.email}
              onChange={handleChange}
            />
       
       <TextField
              label="Age"
              id="outlined-size-small"
        //    type='number'
              size="small"
              name='age'
              value={user.age}
              onChange={handleChange}
            />
       
            
          <Button size='small' variant='outlined' onClick={handleEditUser} > update</Button>
    
        </Stack>
        </Box>
        </Paper>
      </Box>
  )
}

export default EditUser