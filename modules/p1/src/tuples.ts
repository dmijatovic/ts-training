// plain object
const drink = {
  color:'brown',
  carbonated: true,
  sugar: 40
}

// Tuple array type
// array with fixed type order
type Drink = [string,boolean,number]
const pepsi:Drink = ['brown',true,40]
const up7:Drink = ['clear',true,50]
const tea:Drink =['brown',false,0]