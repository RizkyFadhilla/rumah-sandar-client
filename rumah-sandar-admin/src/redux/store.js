import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'

//untuk nambahin reducer2 di configure store
//kalo punya reducer baru, nanti ditambahin dibawah sini

export default configureStore({
  reducer: {
    user : userReducer
  }
})