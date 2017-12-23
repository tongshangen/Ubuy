export default function DataGridReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    // console.log(newState)
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'Requested':
            newState.status = 1;
            var aa =  JSON.parse(action.response)
            newState.response = aa;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}