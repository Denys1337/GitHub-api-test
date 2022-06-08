import { Initial, User, UserDetails, UserRepos } from "../../core/types";


const initialState:Initial = {
    users: [],
    userDetails: {} as UserDetails,
    usersRepo: [],
}

export const GET_USERS = "GET_USERS";
export const GET_USER_DETAILS ="GET_USER_DETAILS";
export const GET_USER_REPO = "GET_USER_REPO";

export const usersReducer = (state = initialState, action: any):Initial  => {

    switch (action.type) {

        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_USER_DETAILS:
            return {
                 ...state,
                 userDetails: action.payload,
                }
        case GET_USER_REPO:
            return {
                 ...state,
                 usersRepo: action.payload,
                    }
        default:
            return state
    }
}

// Actions
export const UsersData = (payload:User[]) => ({ type: GET_USERS ,payload});
export const UserDetailsData = (payload:UserDetails) => ({ type: GET_USER_DETAILS ,payload});
export const UsersRepo = (payload:UserRepos[]) => ({ type: GET_USER_REPO ,payload});
