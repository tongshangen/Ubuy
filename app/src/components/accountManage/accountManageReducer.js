export default function accountReducer(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'accountbeforeRequest':
            newState.status = 0;
            break;
        case 'accountregRequested':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'accountrequestError':
            newState.status = -1;
            newState.error = action.error;
            break;
    }
    return newState;
}