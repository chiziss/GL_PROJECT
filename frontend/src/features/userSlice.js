import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  first_name:"",
  last_name:"",
  email:"",
  adress:""
}

export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.email = action.payload.email
      state.adress = action.payload.adress
    },
    unsetUserInfo: (state, action) => {
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.email = action.payload.email
      state.adress = action.payload.adress
    },
  }
})

export const { setUserInfo, unsetUserInfo } = userSlice.actions

export default userSlice.reducer