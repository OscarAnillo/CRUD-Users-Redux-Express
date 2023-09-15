import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './Features/users-slice';

export const store = configureStore({
    reducer: {
        users: usersSlice
    }
})