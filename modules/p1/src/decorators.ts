/**
 * Typescript decorators. These are different from ES6 decorators!
 * Generally, these are applied to classes and can be applied at
 * any class feature: property, method etc...
 *
 */
@classDecorator
class Ship{
  color:string = "red"

  get formattedColor():string{
    return `This boat has color: ${this.color}`
  }

  @logError
  captain():void{
    console.log("Captain says HI!")
    throw new Error("This is captain error!!!")
  }

  @curryError("Curryed message from Ship.crew():")
  crew():void{
    console.log("Crew is on DECK!")
    throw new Error("Crew is not happy!")
  }

  motor(
    @parameterDecorator speed:number,
    @parameterDecorator power:number){
    console.log("The notor says...wrooom wroom")
  }
}

/**
 * Decorator function
 * @param target
 * @param key
 */
function testDecorator(target:any,key:string):void{
  console.log('Target ', target)
  console.log("Key ", key)
}

/**
 * Basic decorator function that does not accept params.
 * See Ship.captain() method for the implementation
 * @param target
 * @param key
 * @param desc
 */
function logError(target:any,key:string,desc:PropertyDescriptor):void{
  const method = desc.value

  desc.value = function(){
    try{
      method()
    } catch(e){
      console.log("Oops got error from Ship...", e)
    }
  }

}

/**
 * Decorator function that can accept parameters.
 * See Ship.crew() method for implementation
 * @param errMsg
 */
function curryError(errMsg:string){
  return (target:any,key:string,desc:PropertyDescriptor)=>{
    //get value from property descriptor
    const method = desc.value
    //make a function of it and run it
    desc.value = function(){
      try{
        //run method
        method()
      }catch(e){
        console.log(errMsg,e)
      }
    }
  }
}

/**
 * Parameter decorator of an method.
 * See Ship.morot() method
 * @param target 
 * @param key 
 * @param index 
 */
function parameterDecorator(target:any,key:string,index:number){
  console.log("parameterDecorator...key", key)
  console.log("parameterDecorator...index",index)
}


function classDecorator(constructor:any){
  console.log("constructorDecorator...", constructor)
}

const testShip = new Ship()
testShip.captain()
testShip.crew()