function solution(citations) {
    citations.sort((a,b)=>{
        if(a>b){
            return 1
        }else if (a<b){
            return -1
        }else{
            return 0
        }
    })
    let  i= 0;
    
    while(true){
        let OverCited = citations.filter(e=>e>=i).length
        if(OverCited >= i){
            i++
        }else if(OverCited < i){
            i --
            break
        }
    }
    return i
}