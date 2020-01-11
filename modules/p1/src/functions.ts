/**
 * Annotating functions
 */


// simple function that returns number
// defining return is advised in order to use typescript
// for caching missing/wrong returns from function
const add = (a:number, b:number):number => {
  return a + b
}

function divide( a:number, b:number):number {
  return a/b
}

const multiply = function(a:number, b:number):number{
  return a * b
}

// not returning anything
const logger = (msg:string):void => {
  console.log(msg)
}

const throwErr = (msg:string):never => {
  throw new Error(msg)
}


const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast:{date:Date, weather:string}):void =>{
  console.log("The weather is...", forecast)
}

//destructuring ES6

const logW = ({date,weather}) =>{
  console.log("Weather...", logW)
}

//destructuring TS
const logT = ({date,weather}:{date:Date, weather:  string})=>{
  console.log("Weather ts...", date, weather)
}

logT(todayWeather)