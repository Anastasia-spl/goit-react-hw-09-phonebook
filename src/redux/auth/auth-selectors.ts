import { IInitUserState } from '../../interfaces/User.interface';
import { TRootState } from '../store';

type TSelectorFn<T> = (state: TRootState) => T;

const getIsAuthenticated: TSelectorFn<boolean> = state => state.auth.isAuthenticated;
const getUser: TSelectorFn<IInitUserState> = state => state.auth.user;
const getToken: TSelectorFn<null | string> = state => state.auth.token;
const getUserName: TSelectorFn<null | string> = state => getUser(state).name;
const getIsLoading: TSelectorFn<boolean> = state => state.auth.isLoading;
const getIsSignUpError: TSelectorFn<null | string> = state => state.auth.errorSignUp;
const getIsLogInError: TSelectorFn<null | string> = state => state.auth.errorLogIn;
// eslint-disable-next-line
export default { getIsAuthenticated, getUser, getToken, getUserName , getIsLoading, getIsSignUpError, getIsLogInError };