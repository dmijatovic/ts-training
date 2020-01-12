/**
 * Numbers collection or Array of numbers.
 * Length is getter method
 */
export class SortableString {

  constructor (public data:string){}
  /**
   * Get length of data array
   */
  get length():number{
    return this.data.length
  }
  /**
   * Compare two chars in the string
   * @param leftIndex
   * @param rightIndex
   */
  compare(leftIndex:number,rightIndex:number):boolean{
    const a = this.data[leftIndex]
    const b = this.data[rightIndex]
    // comparing chars with same case is correct
    // note! the charASCII code value is compared
    return a.toLocaleLowerCase() > b.toLocaleLowerCase()
  }
  /**
   * Swap two chars of the string
   * @param leftIndex
   * @param rightIndex
   */
  swap(leftIndex:number, rightIndex:number):void{
    const chars = this.data.split("")
    const left = chars[leftIndex]

    chars[leftIndex] = chars[rightIndex]
    chars[rightIndex] = left

    this.data = chars.join("")
  }
}