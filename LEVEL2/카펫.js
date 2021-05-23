function divide(num){
    const cases = []
    if(num===1) return [[1,1]]
    for(let i=1;i<=Math.floor(num/2);i++){
        let mn
        if(num%i===0){
            mn = [num/i,i]
            cases.push(mn)
        }
        
    }
    return cases
}

function solution(brown, yellow) {
    const cases = divide(yellow)
    for(let k of cases){
        if((k[0]+k[1])*2 + 4 === brown){
            return [k[0]+2,k[1]+2]
        }
    }
}