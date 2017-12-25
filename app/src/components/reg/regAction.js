export function getData(_url, _params){
    return {
        types: ['regbeforeRequest', 'regRequested', 'regrequestError'],
        url: _url,
        method: 'get',
        params: _params
    }
}
export function regFuc(obj) {
    return {
        types: ['regbeforeRequest', 'regRequested', 'regrequestError'],
        query: obj
    }
}