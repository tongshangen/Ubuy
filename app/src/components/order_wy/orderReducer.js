export default function StudentReducer(state = {}, action) {
    var reState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequestordersel':
            reState.loading = true;
            break;
        case 'Requestedordersel':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestErrorordersel':
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