export function getData(url,_params) {
    return {
        types: ['orderbeforeRequest', 'orderRequested', 'orderrequestError'],
        url: 'good.php',
        method: 'get',
        params: _params
    }
}

export function orderAll(){
    return {
        type: 'allOrder'
    }
}