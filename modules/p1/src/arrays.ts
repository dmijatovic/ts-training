/**
 * Typed arrays can be handy in case where all arrays have similair values.
 */


//array of strings
const arr:string[] = []
arr.push("string")
// shows error as we defined array of strings
arr.push(23)

//define array to accept only numbers and strings
const arr2:(string|number)[] = [1,2,'string']
arr2.push(4)
arr2.push("string")
// boolean is not defined so error it
arr2.push(true)

