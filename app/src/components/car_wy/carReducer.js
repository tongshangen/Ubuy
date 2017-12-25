export default function StudentReducer(state = {}, action) {
    var reState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequestd':
            reState.loading = true;
            break;
        case 'Requestedd':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestErrord':
            reState.loading = false;
            reState.error = action.error
            break;
            
        case 'beforeRequesta':
            reState.loading = true;
            break;
        case 'Requesteda':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestErrora':
            reState.loading = false;
            reState.error = action.error
            break;

        case 'beforeRequestb':
            reState.loading = true;
            break;
        case 'Requestedb':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestErrorb':
            reState.loading = false;
            reState.error = action.error
            break;
    }
    return reState;
}