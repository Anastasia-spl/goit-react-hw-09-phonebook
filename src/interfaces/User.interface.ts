export interface ISignUpUser {
  name: string | null,
  email: string | null,
  password?: string | null,
}

export interface ILogInUser {
  email: string | null,
  password: string | null,
}

export interface IInitUserState {
  name: null | string, email: null | string
};