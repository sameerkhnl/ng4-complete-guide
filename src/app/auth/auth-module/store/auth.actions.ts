export const TRY_SIGN_UP = "TRY_SIGN_UP";
export const TRY_SIGN_IN = "TRY_SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SET_TOKEN = "SET_TOKEN";
export const LOG_OUT = "LOG_OUT";

export class TrySignUp {
  readonly type = TRY_SIGN_UP;

  constructor(public payload: {username: string, password: string}){

  }
}

export class TrySignIn {
  readonly type = TRY_SIGN_IN;

  constructor(public payload: {username: string, password: string}){

  }
}

export class SignUp {
  readonly type = SIGN_UP;
}


export class SignIn {
  readonly type = SIGN_IN;
}

export class SetToken {
  readonly type = SET_TOKEN;

  constructor(public payload: string){

  }
}

export class LogOut {
  readonly type = LOG_OUT;
}



export type AuthActions = SignUp | SignIn | SetToken | LogOut | TrySignUp | TrySignIn;
