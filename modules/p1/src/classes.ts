/**
 * Typescript classes have additional features from ES6
 * - modifiers: public (default), private, protected
 *
 */


class Vehicle {
  // // properties
  // color:string;
  // //methods
  // constructor(color:string){
  //   this.color = color
  // }
  // short notation for receiving color
  constructor(public color:string){}

  drive():void{
    console.log("chugga chugga")
    this.honk()
  }
  //can be called from child class
  protected honk(){
    console.log("beep beep")
  }
}

class Car extends Vehicle {
  //take make typical for car and color
  //required by parent class
  constructor(public make:number,color:string ){
    super(color)
  }
  //can be only called from within this class
  private driveCar():void{
    console.log("vroom vroom")
  }
  drive():void{
    this.driveCar()
    this.honk()
  }
}

const train = new Vehicle('orange')
const auto = new Car(2001, 'green',)

train.drive()
auto.drive()