function insertionSort(array) {
    let temp
    for(let i = 1; i < array.length; i++) {
        temp = array[i]
        for(var j = i - 1; array[j] > temp && j > -1; j--) {
            array[j+1] = array[j]
        }
        array[j+1] = temp
   }
   return array
}

function solution(array, commands) {
    const answer = []
    for(let k of commands){
        let sortedArr = insertionSort(array.slice(k[0]-1,k[1]))
        answer.push(sortedArr[k[2]-1])
        
    }
    
    return answer
}