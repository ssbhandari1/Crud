import { createSlice } from "@reduxjs/toolkit";




const userSlice=createSlice({
    name:'users',
    initialState:{
        users:[]
    },
    reducers:{
saveUserData:(state,action)=>{
    state.users=action.payload
},
// updateUser:(state,action)=>{
//     console.log(action.payload)
//     const findIndex=state.users.findIndex((user)=>user._id===action.payload._id)

// }



    }
})
 export const {saveUserData}=userSlice.actions

export default userSlice.reducer 