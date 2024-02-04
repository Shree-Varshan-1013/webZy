import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    role: "PUBLIC",
    accessToken: null,
    userDetails: null,
};

const globalSlice = createSlice({
    name: "Global",
    initialState,
    reducers: {
        toggleLogin: (state, action) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addToken: (state, action) => {
            state.accessToken = action.payload;
        },
        addRole: (state, action) => {
            state.role = action.payload;
        },
        deleteRole: (state, action) => {
            state.role = null;
        },
        addUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        deleteUserDetails: (state, action) => {
            state.userDetails = null;
        },
    },
});

export const {
    toggleLogin,
    addUser,
    deleteUser,
    addRole,
    deleteRole,
    addToken,
    deleteToken,
    addUserDetails,
    deleteUserDetails,
} = globalSlice.actions;

export default globalSlice.reducer;