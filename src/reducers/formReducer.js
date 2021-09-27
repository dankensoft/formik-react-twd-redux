import { types } from "../types/types";

export const formReducer = (state = {}, action) => {
    switch (action.type) {
        case types.save:
            return {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                country: action.payload.country,
                streetAddress: action.payload.streetAddress,
                city: action.payload.city,
                state: action.payload.state,
                postalCode: action.payload.postalCode
            }
    
        default:
            return state;
    }
}