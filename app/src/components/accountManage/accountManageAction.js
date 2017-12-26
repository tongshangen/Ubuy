export function getData(_url, _params){
    return {
        types: ['accountbeforeRequest', 'accountRequested', 'accountrequestError'],
        url: _url,
        method: 'get',
        params: _params
    }
}