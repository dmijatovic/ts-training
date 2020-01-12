
export class ListNode{
  nextNode:ListNode|null = null
  constructor(public value:number){}
}

export class LinkedList{
  head: ListNode | null = null
  length:number = 0

  addNodeToTail(value:number):boolean{
    const node = new ListNode(value)
    if (this.head===null) {
      this.head = node
      this.length++
      return true
    } else {
      let tail = this.head
      //find last node
      while (tail.nextNode) tail = tail.nextNode
      //add new node to tail
      tail.nextNode = node
      this.length++
      return true
    }
  }

  delNode(at:number):boolean{
    let pos = 0
    let node = this.head

    while(pos < at){
      if (node?.nextNode){
        node = node.nextNode
      } else {
        return false
      }
      pos++
    }
    //node to be removed
    if (node){
      let tail = node.nextNode
    }
    return true
  }

  getNode(at:number):ListNode | null{
    let pos = 0
    let node = this.head

    while(pos < at){
      pos++
      if (node?.nextNode){
        node = node.nextNode
      } else {
        node = null
        return node
      }
    }
    return node
  }

  compare(leftIndex:number,rightIndex:number){
    const left = this.getNode(leftIndex)
    const right = this.getNode(rightIndex)
    //if missing
    if (left===null || right === null) return false
    //compare
    return left.value > right.value
  }

  swap(leftIndex:number,rightIndex:number):void{
    const left = this.getNode(leftIndex)
    const right = this.getNode(rightIndex)
    // bailout if missing
    if (left===null || right === null) return
    //swap values only (easy way)
    const leftVal = left?.value
    left.value = right.value
    right.value = leftVal
  }

  print():void{
    //just exist if nothing
    // if (this.head===null) return
    let node = this.head
    let list:number[]=[]
    //loop nodes
    while(node){
      list.push(node.value)
      node = node.nextNode
    }
    //print list
    console.log("Nodes...", list.toString())
  }
}