export default function goodListReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
   
    
    switch(action.type){
        case 'goodslistbeforeRequest':
            newState.type = action.type;
            break;
        case 'goodslistRequested':
            newState.type = action.type;
            newState.body = JSON.parse(action.response)

    }

    return newState;
}