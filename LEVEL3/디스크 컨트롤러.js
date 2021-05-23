function solution(jobs) {
    let answer =0;
    const priorityQueue = [];
    let i = 0;
    let time = 0;
    jobs.sort((a,b)=> a[0]-b[0])
    
    while(i<jobs.length || priorityQueue.length!=0){
        if(i<jobs.length && jobs[i][0] <= time){
            priorityQueue.push(jobs[i++])
            priorityQueue.sort((a,b)=>a[1]-b[1])
            continue
        }
        if(priorityQueue.length===0){
            time = jobs[i][0]
        } else {
            const [start,workTime] = priorityQueue.shift()
            answer += time - start + workTime
            time+= workTime 
        }
    }
    
    
    return parseInt(answer/jobs.length);
}