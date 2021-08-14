import { createAction } from '@reduxjs/toolkit';
import {ISignUpUser, ILogInUser} from '../../interfaces/User.interface';

const signUpRequest = createAction('auth/signUpRequest');
const signUpSuccess = createAction<ISignUpUser,'auth/signUpSuccess'>('auth/signUpSuccess');
const signUpError = createAction<string, 'auth/signUpError'>('auth/signUpError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction<ILogInUser, 'auth/logInSuccess'>('auth/logInSuccess');
const logInError = createAction<string,'auth/logInError'>('auth/logInError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction<string, 'auth/logOutError'>('auth/logOutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction<ILogInUser,'auth/getCurrentUserSuccess'>('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction<string, 'auth/getCurrentUserError'>('auth/getCurrentUserError');

 // eslint-disable-next-line
export default {
  signUpRequest,
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
  getCurrentUserError
};