import { createSlice } from "@reduxjs/toolkit";
import { FaGalacticSenate } from "react-icons/fa";

const initialState = {
    isLoggedIn: false,
    isDark: false,
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
        toggleDarkMode: (state, action) => {
            state.isDark = action.payload;
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
            state.role = "PUBLIC";
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
    toggleDarkMode,
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