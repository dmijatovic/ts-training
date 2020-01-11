/**
 * Objecting
 *
 */

const profile = {
  name: 'Alex',
  age: 20,
  pos:{
    lat:12.23,
    lng:2.33
  },
  setAge(age:number):void{
    this.age = age
  }
}

//WHEN using destructuring
//type need to resamble profile object
const {age}:{age:number} = profile

const {pos:{lat,lng}} :{pos:{lat:number; lng:number}} = profile