
import {BubbleSort} from './BubbleSort'
import {ArrayOfNumbers} from "./SortableNumbers"
import {SortableString} from "./SortableString"
import {LinkedList} from "./SortableList"
import {LinkedListAbs} from "./SortableListAbs"

// sort array of numbers 
const myArray = new ArrayOfNumbers([1,5,45,2,7,-100])
const bubbleSort = new BubbleSort(myArray)
bubbleSort.sort()

console.log("myArray...", myArray.data)


// Sort characters in the string!
const myString = new SortableString("xxzRTasycbdssss")
const strSort = new BubbleSort(myString)
strSort.sort()

console.log("myString...", myString.data)


//Sort Linked list
const myList = new LinkedList()
myList.addNodeToTail(5)
myList.addNodeToTail(15)
myList.addNodeToTail(2)
myList.addNodeToTail(-7)
const lstSort = new BubbleSort(myList)
myList.print()
lstSort.sort()
myList.print()

//Sort linked list using abstract class

const myAbsLst = new LinkedListAbs()
myAbsLst.addNodeToTail(300)
myAbsLst.addNodeToTail(-300)
myAbsLst.addNodeToTail(100)
myAbsLst.addNodeToTail(30)
myAbsLst.print()
myAbsLst.sort()
myAbsLst.print()

