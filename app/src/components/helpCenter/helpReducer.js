export default function HelpReducer(state = {}, action){
    console.log(action.type)
    switch(action.type){
        case 'help0':
            state ="<h2>优购会员注册协议</h2><h3>hha</h3>";
            break;
        case 'help1':
            state ="1";
            break;
        case 'help3':
            state ="2";
            break;
    }
    return state;
}