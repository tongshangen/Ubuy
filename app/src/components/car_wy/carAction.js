export function getData(_url, _params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params,
        a:'d'
    }
}

export function updateData(_url, _params,_methods){
    return{
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params,
        method:_methods,
        a:'a'
    }
}

export function delData(_url, _params,_methods){
    return{
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params,
        method:_methods,
        a:'b'
    }
}