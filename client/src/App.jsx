import React from 'react'
import './App.css'
import { Box, Button } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Users from './component/Users'
import CreateUsers from './component/CreateUsers'
import EditUser from './component/EditUser'

const App = () => {
  const navigate=useNavigate()
  return (
  <Box sx={{width:'100%',minHeight:'100vh',backgroundColor:'rgba(0,0,0,0.2)',display:'flex',alignItems:'center',justifyContent:'',flexDirection:"column",gap:'3rem'}}>
<Button variant='contained' sx={{width:'80%',height:'10vh',marginTop:'3rem'}} onClick={()=>{navigate('/create')}}>
 + add user
</Button>
<Box sx={{width:'80%',}}>

<Routes>
  <Route path='/' element={<Users/>}/>
  <Route path='/create' element={<CreateUsers/>}/>
  <Route path='/edit/:id' element={<EditUser/>}/>
</Routes>
</Box>

  </Box>
  )
}

export default App