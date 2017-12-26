    import http from '../utils/httpClient'

export function ajaxMiddleware(api) {
    return function (dispatch) {
        return function (action) {
            if(action){
                const { types, url, method = 'get', params = {} } = action
                // console.log('id',action.types)
                if (!url) {
                    return dispatch(action)
                }
                api.dispatch({
                    type: 'regbeforeRequest'
                })
                if (url) {
                    const [a,b,c] = types
                // console.log(8888)
                    http[method](url, params).then(res => {
                        //  console.log('00000')
                        api.dispatch({
                            type:b,
                            response: res
                        })
                    }).catch(error => {
                    api.dispatch({
                        type: 'regrequestError',
                        error
                    })
                })
              }
        }
    }
}
}

// export function userMiddleWare(middlewareAPI){
//     return function(dispatch){
//         return function(action){
//             const {types,yes,url, method = 'get', params} = action;
//             console.log(action)
//             if(yes == 1){
//                 console.log('未登录')
//                 return dispatch({
//                     type:'login'
//                 });
//             }
//             if(yes==2){
//                 console.log('已登录')
//                 http[method](url, params).then(res => {
//                     middlewareAPI.dispatch({
//                         type: 'logined',
//                         repsonse: res,
//                     })
//                 }).catch(error => {
//                     middlewareAPI.dispatch({
//                         type: 'requestError',
//                         error
//                     })
//                 })
//             }
//         }
//     }
// }
