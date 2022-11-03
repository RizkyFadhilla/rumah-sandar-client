import { createSlice } from '@reduxjs/toolkit'
//create slice -> kita bisa define state, reducers, dan actions di satu tempat

//ini initial state untuk store datanya
const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
//ini nama2 actionya, otomatis sama dengan nama reducernya
export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer