import { createSlice } from '@reduxjs/toolkit';
import { addUserService, deleteUserService, getAllUsers } from '../../Services/services';

const initialState = [];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            return action.payload
        }, 
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.filter((user) => user._id !== action.payload)
        }
    }
});

export const getUsersPayload = () => {
    return async (dispatch) => {
        const allUsers = await getAllUsers();
        dispatch(setUsers(allUsers))
    }
}

export const addUserPayload = (user) => {
    return async (dispatch) => {
        const newUser = addUserService(user);
        dispatch(addUser(newUser))
    }
}

export const deleteUserPayload = (id) => {
    return async (dispatch) => {
        const deletedUser = deleteUserService(id)
        dispatch(deleteUser(deletedUser));
    }
}

export const { setUsers, addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;