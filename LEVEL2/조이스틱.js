function solution(name) {
    
    let upDown = 0 // 위아래 방향키 누른 횟수
    let leftRight = 0 // 왼오 방향키 누른 횟수
    let baseNum = "A".charCodeAt()
    
    const list = name.split('') // 정방향 리스트   왼쪽->오른쪽 방향
    const reverseList = name.split('').reverse()
    reverseList.unshift(reverseList.pop()) // 역방향 리스트   오른쪽->왼쪽방향
    
    // 정방향, 역방향 모두 현재 위치를 0 번 index로 고정
    // ex) "JAB" 의 경우
    // 현재 위치하는 자리가 "A"인경우,
    // 정방향 리스트 = ["A","B","J"]
    // 역방향 리스트 = ["A","J","B"]
    
    // 아이디어 : 현재 기준점에서 "A"가 아닌 문자 정방향 역방향 리스트에서 순차적으로 찾고,
    // 정방향 역방향중 가까운 방향으로 이동하고
    // 가까운 방향이 정방향일 경우, 역방향일 경우를 나누어 카운트한다.
    
    for(let i=0; i < name.length; i++){
        upDown += Math.min.apply(null,[name[i].charCodeAt()-baseNum,91-name[i].charCodeAt()])
    } // 위 또는 아래로 원하는 문자로 바꾸는 최소 횟수의 합


    // 좌,우 이동하는 최소값의 합
    for(let k =0; k < name.length; k++){
        if(list[k]==="A" && reverseList[k]==="A"){ // 둘다 "A"인 경우 pass
            continue
        } else {
            if(list[k] !=="A"){ // 바꿀 문자가 정방향이 더 가까운 경우
                leftRight += k // 찾은 문자의 index 만큼 이동
                while(k>0){ // 찾은 문자를 0번 index로 가게끔 순서를 유지한채로 리스트를 재배열
                    list.push(list.shift())
                    reverseList.unshift(reverseList.pop())
                    k--
                }
                list[0] = "A" // 문자를 바꿨다는 가정하에 "A" 로 치환
                reverseList[0]= "A"
            } else if(reverseList[k]!=="A"){ // 바꿀 문자가 역방향이 더 가까운 경우
                leftRight += k // 찾은 문자의 index 만큼 이동
                while(k>0){ // 찾은 문자를 0번 index로 가게끔 순서를 유지한채로 리스트를 재배열
                    list.unshift(list.pop())
                    reverseList.push(reverseList.shift())
                    k--
                }
                list[0] = "A" // 문자를 바꿨다는 가정하에 "A"로 치환
                reverseList[0]= "A"
            }
        }
        
    }
    return upDown + leftRight
}