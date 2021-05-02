function solution(n, lost, reserve) {
    var answer = 0;
    let students = new Map()
    
    for(let i=0;i<n+2;i++){
        students.set(i,1)
    }

    students.set(0,4)
    students.set(n+1,4)
    
    for(let k of lost) {
        students.set(k,0)
    }
    
    for(let j of reserve){
        students.set(j,students.get(j)+1)
        
    }
    
    console.log(students)
    let Iterator = students.values()

    for(let i=1;i<n+1;i++){
        if(students.get(i)===0){
            if(students.get(i-1)===2){
                students.set(i-1,1)
                students.set(i,1)
            } else if(students.get(i+1)===2){
                students.set(i,1)
                students.set(i+1,1)
            }
        }
    }
    
    for(let k of Iterator){
        if(k===0){
            answer++
        }
    }
    
    return n - answer
    
}