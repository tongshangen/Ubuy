export default function StudentReducer(state = {}, action) {
    var reState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequest':
            reState.loading = true;
            break;
        case 'Requestedorder_wy':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestError':
            reState.loading = false;
            reState.error = action.error
            break;
            
        // case 'beforeRequestorderins':
        //     reState.loading = true;
        //     break;
        // case 'Requestedorderins':
        //     reState.loading = false;
        //     reState.response = action.response;
        //     break;
        // case 'requestErrororderins':
        //     reState.loading = false;
        //     reState.error = action.error
        //     break;

        // case 'beforeRequestdel':
        //     reState.loading = true;
        //     break;
        // case 'Requesteddel':
        //     reState.loading = false;
        //     reState.response = action.response;
        //     break;
        // case 'requestErrordel':
        //     reState.loading = false;
        //     reState.error = action.error
        //     break;
    }
    return reState;
}