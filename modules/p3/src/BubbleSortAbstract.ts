/**
 * Bubble sort abstract class is used by other classes to implement
 * bubble sort method. It is always parent of other classes.
 * */


export abstract class BubbleSort{
  abstract length:number
  abstract compare(leftIndex:number, rightIndex:number):boolean
  abstract swap(leftIndex:number, rightIndex:number):void
  /**
   * BubbleSort O(n^2)
   */
  sort():void{
    const {length} = this
    //loop all elements - first
    for (let x=0; x<length; x++){
      //loop all
      for (let y=0; y<length-x-1; y++){
        if (this.compare(y, y+1)){
          this.swap(y, y+1)
        }
      }
    }
    console.log("Sorting done...")
  }
}