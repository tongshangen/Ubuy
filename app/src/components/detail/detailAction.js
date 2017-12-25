export function detailHistory(){
    console.log('跳到浏览记录')
}
export function getGoodDetail(){
    return {
        types: ['beforeRequest', 'detailRequested', 'requestError'],
        type: 'getGoodDetail',
        url: 'getGoodDetail.php',
        params:{goodid: 1 }
    }
}