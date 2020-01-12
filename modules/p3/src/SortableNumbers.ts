/**
 * Numbers collection or Array of numbers.
 * Length is getter method
 */
export class ArrayOfNumbers {

  constructor (public data:number[]){}
  /**
   * Get length of data array
   */
  get length():number{
    return this.data.length
  }
  /**
   * Compare two values
   * @param leftIndex
   * @param rightIndex
   */
  compare(leftIndex:number,rightIndex:number):boolean{
    return this.data[leftIndex] > this.data[rightIndex]
  }
  /**
   * Swap two values
   * @param leftIndex
   * @param rightIndex
   */
  swap(leftIndex:number, rightIndex:number):void{
    const leftVal = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftVal
  }
}