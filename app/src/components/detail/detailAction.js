export function detailHistory(){
    console.log('跳到浏览记录')
}
export function getGoodDetail(){
    return {
        type: 'getGoodDetail',
        url: 'getGoodDetail.php',
        params:{goodid: 1 }
    }
}