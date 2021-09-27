import { types } from "../types/types"

export const save = (firstName, lastName, email, country, streetAddress, city, state, postalCode) => {
    return {
        type: types.save,
        payload: {
            firstName,
            lastName,
            email,
            country,
            streetAddress,
            city,
            state,
            postalCode
        }
    }
}