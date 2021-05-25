import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { IInitUserState } from '../../interfaces/User.interface';
import authActions from './auth-actions';

const { signUpRequest,
  signUpSuccess, 
  signUpError, 
  logInRequest, 
  logInSuccess, 
  logInError, 
  logOutRequest, 
  logOutSuccess, 
  logOutError, 
  getCurrentUserRequest, 
  getCurrentUserSuccess, 
  getCurrentUserError } = authActions;


const initialUserState: IInitUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [signUpSuccess.type]: (_, { payload }) => payload.user,
  [logInSuccess.type]: (_, { payload }) => payload.user,
  [logOutSuccess.type]: () => initialUserState,
  [getCurrentUserSuccess.type]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [signUpSuccess.type]: (_, { payload }) => payload.token,
  [logInSuccess.type]: (_, { payload }) => payload.token,
  [logOutSuccess.type]: () => null,
});

const isAuthenticated = createReducer(false, {
  [signUpSuccess.type]: () => true,
  [logInSuccess.type]: () => true,
  [getCurrentUserSuccess.type]: () => true,
  [signUpError.type]: () => false,
  [logInError.type]: () => false,
  [getCurrentUserError.type]: () => false,
  [logOutSuccess.type]: () => false,
});

const isLoading = createReducer(false, {
  [signUpRequest.type]: () => true,
  [logInRequest.type]: () => true,
  [logOutRequest.type]: () => true,
  [getCurrentUserRequest.type]: () => true,
  [signUpError.type]: () => false,
  [logInError.type]: () => false,
  [logOutError.type]: () => false,
  [getCurrentUserError.type]: () => false,
  [signUpSuccess.type]: () => false,
  [logInSuccess.type]: () => false,
  [logOutSuccess.type]: () => false,
  [getCurrentUserSuccess.type]: () => false,
});

type TSetError = (_: any, action:{payload: string, type: string}) => string;
const setError: TSetError = (_, {payload}) => payload;
const cleanError = () => null;

const errorSignUp = createReducer<null | string>(null, {
  [signUpError.type]: setError,
  [signUpSuccess.type]: cleanError,
  [signUpRequest.type]: cleanError,
});

const errorLogIn = createReducer<null | string>(null, {
  [logInError.type]: setError,
  [logOutError.type]: setError,
  [logInSuccess.type]: cleanError,
  [logOutSuccess.type]: cleanError,
  [logInRequest.type]: cleanError,
  [logOutRequest.type]: cleanError,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  isLoading,
  errorSignUp,
  errorLogIn
})