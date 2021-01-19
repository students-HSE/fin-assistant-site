import {Reducer} from "redux";
import {AppThunkAction} from "./index";

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    age?: number;
    password: string;
}

export interface ProfileState extends User {
}

interface RequestProfileAction {
    type: 'REQUEST_USER'
}

interface ReceiveProfileAction {
    type: 'RECEIVE_USER',
    user: User
}

type KnownAction = RequestProfileAction | ReceiveProfileAction;

export const actionCreators = {
    requestProfile(): AppThunkAction<KnownAction> {
        return async (dispatch, getState) => {
            dispatch({ type: "REQUEST_USER" });
            
            const response = await fetch('/api/v1/users/@me');
            const user = (await response.json()) as User;
            
            dispatch({ type: "RECEIVE_USER", user });
        }
    }
}

export const reducer: Reducer<ProfileState> = (state, action: KnownAction) => {
    switch (action.type) {
        case "RECEIVE_USER":
            return action.user;
    }
    
    return { } as ProfileState;
}