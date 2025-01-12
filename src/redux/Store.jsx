// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice pour gérer l'utilisateur et les erreurs
const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    token: '',
    error: '',
  },
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.error = '';
    },
    setError(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.username = '';
      state.email = '';
      state.token = '';
      state.error = '';
    },
  },
});

export const { setUser, setError, logout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
