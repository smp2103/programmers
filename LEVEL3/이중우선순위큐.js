function solution(operations) {
    const priorityQueue = [];
    
    for(let k of operations){
        const letter = k.split(' ')[0]
        const num = k.split(' ')[1]
        
        if(letter === "I"){
            priorityQueue.push(num)
            priorityQueue.sort((a,b)=>b-a)
        }else if(letter === "D"){
            if(num==="1"){
                priorityQueue.shift()
            }else{
                priorityQueue.pop()
            }
        }
    }
    
    if(priorityQueue.length===0){
        return [0,0]
    }else{
        return [priorityQueue.shift(),priorityQueue.pop()].map(el=>Number(el))
    }
}