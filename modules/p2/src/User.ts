
import faker from 'faker'

export class User {
  name: string
  location:{
    lat: number,
    lng: number
  }
  constructor(){
    //initalize
    this.init()
  }
  init():void{
    this.name = faker.name.firstName()
    //needs to be in
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}