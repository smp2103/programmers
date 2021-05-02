function solution(progresses, speeds) {
    let count = 1;
    var answer = [];
    var list =[];
    
    for(let i=0; i < progresses.length; i++){
        list.push(Math.ceil((100-progresses[i])/speeds[i]));
    };
    let maxnum = list[0];
    for(let i=1; i<list.length;i++){
        if(list[i]<=maxnum){
            count++
            if(i===list.length-1){
                answer.push(count)
            };
        } else {
            answer.push(count);
            count=1;
            maxnum = list[i];
            if(i===list.length-1){
                answer.push(count);
            };
        }
        
    };
    return answer
}