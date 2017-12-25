export default function regReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'regbeforeRequest':
            newState.status = 0;
            break;
        case 'regRequested':
            newState.status = 1;
            newState.response = JSON.parse(action.response);
            break;
        case 'regrequestError':
            newState.status = -1;
            newState.error = action.error;
            break;
    }
    return newState;
}