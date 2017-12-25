export function getData(_url, _params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params,
        a:'ordersel'
    }
}


export function insertorder(_url, _params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params,
        a:'orderins'
    }
}

export function delorder(_url, _params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params,
        a:'orderdel'
    }
}