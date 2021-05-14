function solution(numbers) {
    
    const strArr = numbers.map(e=>String(e))
    const answer = strArr.sort((a,b)=>{
        if(a[0]>b[0]){
            return -1
        }else if (a[0]<b[0]){
            return 1
        }else{
            if((a+b)>(b+a)){
                return -1
            }else if((a+b)<(b+a)) {
                return 1
            } else{
                return -1
            }
        }
    }).join('')
    
    if(answer.split('').filter(el=>el!=="0").length=== 0) return "0"
    return answer 
    
    
}