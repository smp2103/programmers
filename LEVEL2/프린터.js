function solution(priorities, location) {
    const arr = [];
    for(let k=0;k<priorities.length;k++){
        arr.push([priorities[k],k])
    }
    
    const printed = [];
    let printArr,print
    while(arr.length!==0){

        printArr = arr.shift();
        print = priorities.shift();
        if(printArr[0] < Math.max.apply(null,priorities)){
            arr.push(printArr)
            priorities.push(print)
            
        } else{
            printed.push(printArr)
        }
        
    }
    for(let k of printed){
        if(k[1]===location){
            return printed.indexOf(k)+1
        }
    }
}