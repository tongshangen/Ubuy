export function detailHistory(){
    console.log('跳到浏览记录')
}
export function getGoodDetail(){
    return {

        types: ['beforeRequest', 'getGoodDetail','requestError'],
        url: 'getGoodDetail.php',
        params:{goodid: 1 }
    }
}