/**
 * Bubble sort class that can sort various data types ONLY
 * if these data type have following props and methods
 * implemented: length:number, compare, swap.
 * These props and methods are defined as interface of the class.
 * */

interface Sortable {
  length: number,
  compare: (leftIndex:number, rightIndex:number)=>boolean,
  swap:(leftIndex:number, rightIndex:number)=>void
}


export class BubbleSort{
  constructor(public collection:Sortable){}
  /**
   * BubbleSort O(n^2)
   */
  sort():void{
    const {length} = this.collection
    //loop all elements - first
    for (let x=0; x<length; x++){
      //loop all
      for (let y=0; y<length-x-1; y++){
        if (this.collection.compare(y, y+1)){
          this.collection.swap(y, y+1)
        }
      }
    }
    console.log("Sorting done...")
  }
}