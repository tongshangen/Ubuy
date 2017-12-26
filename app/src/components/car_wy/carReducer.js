export default function StudentReducer(state = {}, action) {
    var reState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequest':
            reState.loading = true;
            break;
        case 'Requestedcarget':
            reState.loading = false;
            // var aa = action.response;
            reState.response = action.response;
            break;
        case 'requestError':
            reState.loading = false;
            reState.error = action.error
            break;

       
    }
    // console.log(reState);
    return reState;
}