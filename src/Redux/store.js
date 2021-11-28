import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice/themeSlice';
import userSlice from './userSlice/userSlice';
import notifyReducer from 'react-redux-notify';

const store = configureStore({
    reducer:{
        theme:themeSlice,
        user:userSlice,
        notifications: notifyReducer
    }
})


export default store;