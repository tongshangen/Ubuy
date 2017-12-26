export default function feedBackReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'FeedBackRequested':
            newState.status = 1;
            var aa =  JSON.parse(action.response)
            newState.response = aa[0].username;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}