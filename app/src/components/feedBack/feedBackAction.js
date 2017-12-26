export function InserDate(eve){
    // console.log(eve)
    return {
        types: ['beforeRequest', 'FeedBackRequested', 'requestError'],
        url: 'feedBack.php',
        params:{type:eve.type,word:eve.text,name:eve.name},
        method:'post'
    }
}
export function getDate(tel){
    console.log(tel)
    return {
        types: ['beforeRequest', 'FeedBackRequested', 'requestError'],
        url: 'feedBack.php',
        params:{tel:tel},
        method:'post'
    }
}