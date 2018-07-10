import * as fromAuthActions from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

export const initialState: State = {
  token: null,
  authenticated: false
}

export function AuthReducer(state = initialState, action: fromAuthActions.AuthActions) {
  switch (action.type){
    case fromAuthActions.SIGN_UP:
    case fromAuthActions.SIGN_IN:
      return {
        ...state,
        authenticated: true
      }

    case fromAuthActions.LOG_OUT:
      return {
        ...state,
        authenticated: false
      }

    case fromAuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    default:
      return state;
  }
}
