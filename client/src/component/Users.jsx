import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Users = () => {
  const navigate=useNavigate()
const dispatch=useDispatch()
const allUserData=useSelector((state)=>state.users)
console.log(allUserData)
    useEffect(()=>{
const fetchUsersData=async()=>{

    try {
        const res=await axios.get('http://localhost:3001')
        console.log(res)
        dispatch(saveUserData(res.data))
    } catch (error) {
        console.log(error)
    }
}
fetchUsersData()
    },[])

    const handleDeleteUser=async(id)=>{
      console.log(id)
      try {
        const res=await axios.delete(`http://localhost:3001/${id}`)
        console.log(res.data)
        window.location.reload(); 
      } catch (error) {
        console.log(error)
        
      }

    }
 
  return (
    <TableContainer component={Paper}>
    <Table sx={{  }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center" >Name</StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Age</StyledTableCell>
          <StyledTableCell align="center">Action</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
    {
        allUserData?.users.map((user,index)=>(
            <StyledTableRow key={user._id} >
            <StyledTableCell  align="center">
          {  user.name}
            </StyledTableCell>
            <StyledTableCell align="center">  {user.email}</StyledTableCell>
            <StyledTableCell align="center"> {user.age}</StyledTableCell>
            <StyledTableCell align="center">
              <EditIcon sx={{cursor:'pointer'}} onClick={()=>{navigate(`/edit/${user._id}`)}} /> 
            <DeleteIcon sx={{cursor:'pointer'}} onClick={()=>{handleDeleteUser(user._id)}}/>
             </StyledTableCell>
          </StyledTableRow>
        ))
    }
        
 
      
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Users