class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.weight = 0
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.weight += value
        return this
    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head
            this.head = newNode
        }
        this.weight += newNode.value
        return this

    }
    shift(){
        if(!this.head){
            return undefined
        }
        let preHead = this.head
        let newHead = this.head.next
        this.head = newHead
        preHead.next = null
        this.weight -= preHead.value
        if(this.length===0){
            this.tail = null
        }
        return preHead
    }
    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.weight -= temp.value
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp

    }
}

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge = new LinkedList(0);
    const trucks = new LinkedList(0);

    for(let k =0;k<bridge_length;k++){
        bridge.push(0)
    }
    for(let i of truck_weights){
        trucks.push(i)   
    }

    bridge.shift();
    trucks.shift();

    let nowTruck = trucks.shift();
    bridge.shift();
    bridge.push(nowTruck.value)
    answer++

    while(bridge.weight){
        nowTruck = trucks.shift();
        bridge.shift()
        if(!nowTruck){
            bridge.push(0)
            answer++
            continue
        }
        if(weight-bridge.weight>=nowTruck.value){
            bridge.push(nowTruck.value)
        } else{
                trucks.unshift(nowTruck.value)
                bridge.push(0)
        }
        answer++
    }

    return answer;
}