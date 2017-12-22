export default function goodsListReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            newState.type = action.type;
            break;
        case 'Requested':
            newState.type = action.type;
            newState.body = action.repsonse.data
    }

    return newState;
}