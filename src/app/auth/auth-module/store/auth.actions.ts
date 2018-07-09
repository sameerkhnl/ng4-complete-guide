

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const GET_TOKEN = "GET_TOKEN";
export const LOG_OUT = "LOG_OUT";



export class SignUP {
  readonly type = SIGN_UP;

  constructor(public payload: {username: string, password: string}){

  }
}

export class SignIn {
  readonly type = SIGN_IN;

  constructor(public payload: {username: string, password: string}){

  }
}

export class GetToken {
  readonly type = GET_TOKEN;

}

export class LogOut {
  readonly type = LOG_OUT;
}



export type AuthActions = SignUP | SignIn | GetToken | LogOut;
