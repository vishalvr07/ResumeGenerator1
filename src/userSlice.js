import {createSlice} from '@reduxjs/toolkit'
export const userSlice = createSlice({
    
    //state
    
name:"user" ,
initialState:{
    user:''
},
    
    //reducers
    
reducers:{
    
    //actions
    login:(state , action) => {
        state.user = action.payload;
    },
  
},

});

export const {login } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;