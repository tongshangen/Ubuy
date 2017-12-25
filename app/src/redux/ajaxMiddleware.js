    import http from '../utils/httpClient'

export function ajaxMiddleware(api) {
    return function (dispatch) {
        return function (action) {
            // console.log(action)
            const { types, url, method = 'get', params = {} } = action
            if (!url) {
                return dispatch(action)
            }

            api.dispatch({
                type: 'beforeRequest'
            })
            if (url) {
                const [a, b, c] = types
                http.get(url, params).then(res => {
                    api.dispatch({
                        type: b,
                        response: res
                    })
                }).catch(error => {
                    api.dispatch({
                        type: 'requestError',
                        error
                    })
                })
            }
        }
    }
}