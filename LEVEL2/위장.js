function solution(clothes) {
    var answer = 1;
    
    var clothesObjValues = Object.values(Object.fromEntries(new Map(clothes)))
    
    const valuesMap = clothesObjValues.reduce((acc,cur)=>{
        acc.set(cur,(acc.get(cur)||0)+1);
        return acc
    },new Map())
    
    const valuesIterator = valuesMap.values()
    
    
    if(valuesMap.size===1){
        return valuesIterator.next().value
    }else{
        for(let k=0;k<valuesMap.size;k++){
        let value = valuesIterator.next().value + 1
        answer = answer*value
        }
    return answer -1
    }
    
}