function arrayToObject(array){
    const newObject = {}
    for(let k of array){
        if(!newObject[k]){
            newObject[k] =1
        }else{
            newObject[k]+=1
        }
    }
    return newObject;
}


function solution(participant, completion) {
    var answer = '';
    
    const participantObject = arrayToObject(participant);
    const completionObject = arrayToObject(completion);
    
    for(let key in completionObject){
        if(participantObject[key]===completionObject[key]){
            participantObject[key]=0
        }else{
            if(participantObject[key]!==completionObject[key]){
                participantObject[key] = participantObject[key]-completionObject[key]
            }
        }
    }
    
    for(let key in participantObject){
        if(participantObject[key] != 0){
            answer = key
        }
    }
    
    return answer;
}