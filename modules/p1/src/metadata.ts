import 'reflect-metadata'

const plane = {
  color:'red'
}


// save metadata to plane
// this info is ONLY visible through Reflect API
Reflect.defineMetadata('note','hi there', plane)
Reflect.defineMetadata('height', 10, plane)

// get metdata info
const planeHeight = Reflect.getMetadata('height', plane)

// assotiate metatdata with property color of object plane
Reflect.defineMetadata('hex','#333',plane,'color')


/**
 * USING metadata with decorators
 */

class Plane{
  color:string = 'red'

  @metaDecorator("secret","12345")
  fly(){
    console.log("vrrooororormmm!")
  }
}

function metaDecorator(metaKey:string, metaValue:string){
  return (target:any, key:string)=>{
    // save metadata value using decorator for later use
    Reflect.defineMetadata(metaKey,metaValue,target, key)
  }
}