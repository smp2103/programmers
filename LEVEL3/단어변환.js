function itemInCommon(str1, str2) {
    let obj = []
    let count =0
    for (let i = 0; i < str1.length; i++) {
        obj.push(str1[i])
    }
    for (let j = 0; j < str2.length; j++) {
      if (obj[j]===str2[j]) {
        count++
      }
    }
    return count===str1.length-1 ? true : false
}

function hasSameElement(arr1,arr2){
   let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true
    }
    for (let j = 0; j < arr2.length; j++) {
      if (obj[arr2[j]]) return true
    }
    return falsenp 
}

function solution(begin, target, words) {
   let temp = begin
   let candidates=[]
   const last = words.filter(el=>itemInCommon(target,el))
   let i = 1

   if(!words.includes(target)) return 0
   if(itemInCommon(temp,target)){
       return 1
   }

   while(true){
       if(last.includes(temp)){
           return i
       }
       let changeList = words.filter(el=>itemInCommon(temp,el))

       for(let j of changeList) {
           temp = j
           candidates.push(words.filter(el=>itemInCommon(temp,el)))
       }

       for(let k of candidates){
           if(k.length===0){
               return 0
           }
           if(hasSameElement(k,last)){
               return i + 2
           }
       }
       changeList = candidates
       candidates = []
       i++
   }

}