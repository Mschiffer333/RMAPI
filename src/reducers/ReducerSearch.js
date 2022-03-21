import { SEARCH } from "../API/API";

export default function (state = [], action) {
    switch(action.type) {
        case SEARCH:
            return [ action.payload.data ];
    }
    return state;
}