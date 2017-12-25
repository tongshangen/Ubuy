export default function detailReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
   
    
    switch(action.type){
        case 'beforeRequest':
            newState.type = action.type;
            break;
        case 'detailRequested':
            newState.type = action.type;
            newState.body = JSON.parse(action.response)

    }

    return newState;
}