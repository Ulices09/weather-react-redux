import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]); Lo mismo que abajo
            return [ action.payload.data, ...state ];
            break;
    
        default:
            return state;
            break;
    }
}