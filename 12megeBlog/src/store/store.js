import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Added this line

const store = configureStore({
    reducer: {
        auth: authReducer, // Added this line
    }
});

export default store;
