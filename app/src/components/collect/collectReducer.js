export default function collectReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
//    console.log(action,77776)
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'collectRequested':
            newState.status = 1;
            // var aa =  JSON.parse(action.response)
            newState.response = action.response;
            break;
        case 'collectrequestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}