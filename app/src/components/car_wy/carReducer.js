export default function StudentReducer(state = {}, action) {
    var reState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequest':
            reState.loading = true;
            break;
        case 'Requested':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestError':
            reState.loading = false;
            reState.error = action.error
            break;
        default:
            
    }
    return reState;
}