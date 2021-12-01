import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

const initialStore = {
      user: null
};


export const login = createAsyncThunk(
  'user/login',
  async ( publicKey ) => {
      return(
          await axios.get(`http://localhost:4000/v1/users/${publicKey}`)
          .then(res =>{
              console.log(res.data, "wohoooooo")
              return res.data
          })
          .catch(error =>{
            throw new Error(error.response.data.message)
          })
      )
  }
)


export const signup = createAsyncThunk(
  'user/signup',
  async ( payload ) => {
    console.log(payload)
      return(
          await axios.post('http://localhost:4000/v1/users',{...payload})
          .then(res =>{
              console.log(res.data)
              return res.data
          })
          .catch(error =>{
            console.error(error.response.data.message)
          })
      )
  }
)






const userSlice = createSlice({
  name: "user",
  initialState: initialStore,
  reducers: {
    setUser:(state, action) =>{
      state.user = action.payload
    },
      logout:(state) =>{
        state.user = null
      }
  },
  extraReducers: 
        (builder) => {
          builder.addCase(login.fulfilled, (state, action)=>{
            state.user = action.payload
          })
          builder.addCase(login.rejected, (state, action)=>{
            reactLocalStorage.remove('publicKey')
            throw Error(action.error.message)
          })
          builder.addCase(signup.fulfilled, (state, action)=>{
            state.user = action.payload
          })
          builder.addCase(signup.rejected, (state, action)=>{
            throw Error(action.error.message)
          })
        }
          
});

export const userActions = userSlice.actions;
export default userSlice.reducer;