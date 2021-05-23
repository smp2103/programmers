function combination(arr,number){
    const result = [];

    if(number===1){
        return arr.map(el=>[el])
    }

    arr.forEach((currentValue,index,origin) => {
        const restElements = origin.slice(index+1)
        const combinations = combination(restElements,number-1)
        const results = combinations.map(el=>[currentValue,...el])
        result.push(...results)
    });
    return result
}

function permute(array,eachElements,outArr) {
    let chr
    
    for(let i = 0; i < eachElements.length; i++) {
        chr = eachElements.splice(i, 1)[0]
        array.push(chr)
        
        if(eachElements.length == 0) {
            outArr.push(array.slice())   
        }
        
        permute(array, eachElements, outArr)
        eachElements.splice(i, 0, chr) 
        array.pop()
    }
    return outArr.map(el=>el.join(''))
}

function checkPrime(num){
    let isPrime = true;
    if(num === 0 || num ===1){
        isPrime = false
    }
    
    for(let i=2;i<num;i++){
        if (num%i === 0){
            isPrime = false
        }
    }
    return isPrime
}



function solution(numbers) {
    const numbersToArr = numbers.split('');
    const allCase = [];
    const temp = [];
    let answer = 0;
    for(let k=1;k<numbersToArr.length+1;k++){
        temp.push(...combination(numbersToArr,k))
    }
    for(let i of temp){
        allCase.push(...permute([],i,[]))
        
    }
    
    const tempValues = allCase.map(el=>Number(el))
    const arrToSet = new Set(tempValues)
    const values = []
    for(let j of arrToSet){
        values.push(j)
    }

    values.forEach(el=>{
        if(checkPrime(el)){
            answer++
        }
    })
    
    return answer
}