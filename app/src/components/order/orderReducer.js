export default function OrderReducer(state={}, action){
    var newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'orderbeforeRequest':
            newState.status = 0;
            break;
        case 'orderRequested':
            newState.status = 1;
            newState.response = JSON.parse(action.response);
            break;
        case 'orderrequestError':
            newState.status = -1;
            newState.error = action.error;
            break;
        default:
            break;
    }
    return newState;
}