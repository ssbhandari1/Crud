import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUsers = () => {
const navigate=useNavigate()
  const[user,setUser]=useState({
    name:'',
    email:'',
    age:0,
 
  })





  const handleChange=(e)=>{
const name=e.target.name
const value=e.target.value
console.log(name,value)
setUser({...user,[name]:value})
  } 
  const handleAddUser=async()=>{
try {
    const res=await axios.post('http://localhost:3001',user)
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
    
          
         <Typography variant='h6' sx={{fontWeight:'600',color:'red'}}>Create User</Typography>

         
 
        <TextField
              label=" Name"
              id="outlined-size-small"
       
              size="small"
              name='name'
              onChange={handleChange}
            />
             <TextField
              label="Email"
              id="outlined-size-small"
          //  type='file'
              size="small"
              name='email'
              onChange={handleChange}
            />
       
       <TextField
              label="Age"
              id="outlined-size-small"
        //    type='number'
              size="small"
              name='age'
              onChange={handleChange}
            />
       
            
          <Button size='small' variant='outlined' onClick={handleAddUser} > Create</Button>
    
        </Stack>
        </Box>
        </Paper>
      </Box>
  )
}

export default CreateUsers