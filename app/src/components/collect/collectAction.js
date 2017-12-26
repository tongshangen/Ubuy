export function getData(tel){
    console.log(tel)
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: 'collect.php',
        params:{tel:tel},
        method:'post'
    }
}