export function detailHistory(){
    console.log('跳到浏览记录')
}
export function getGoodDetail(aa){
    
    return {

        types: ['beforeRequest', 'detailRequested','requestError'],
        url: 'getGoodDetail.php',
        params:{goodid: aa }
    }
}