export default function regReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'Requested':
            newState.status = 1;
            newState.response = action.response.data;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error;
            break;
    }
    return newState;
}