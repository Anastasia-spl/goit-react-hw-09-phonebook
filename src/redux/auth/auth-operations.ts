import axios from 'axios';
import authActions from './auth-actions';
import {ISignUpUser, ILogInUser} from '../../interfaces/User.interface';
import { TRootState, TAppDispatch } from '../store';

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

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token: string | null) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

const signUp = (credentials: ISignUpUser) => async (dispatch: TAppDispatch) => {
  dispatch(signUpRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.token)
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    if (error?.response?.data?.message?.includes('is shorter than the minimum allowed length (7)')) {
      dispatch(signUpError('Your password is shorter than the minimum allowed length (7)'));
    }
    else if (error?.response?.data?.code === 11000) {
      dispatch(signUpError(`Email "${error.response.data.keyValue.email}" is already used.`));
    } else {
      dispatch(signUpError(error.message));
    }
  }
}

const logIn = (credentials: ILogInUser) => async (dispatch: TAppDispatch) => {
  dispatch(logInRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    dispatch(logInSuccess(response.data));
  } catch (error) {
    dispatch(logInError('Wrong password or email.'));
  }
}

const logOut = () => async (dispatch: TAppDispatch) => {
  dispatch(logOutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutError(error.message))
  }
}

const getCurrentUser = () => async (dispatch: TAppDispatch, getState: () => TRootState ) => {
  dispatch(getCurrentUserRequest());
  
  const { auth: {token: persistedToken}} = getState();
  token.set(persistedToken);

  try {
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch(error) {
    dispatch(getCurrentUserError(error.message))
  }
}

// eslint-disable-next-line
export default { signUp, logIn, logOut, getCurrentUser };