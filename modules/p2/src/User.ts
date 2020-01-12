
import faker from 'faker'

import {MarkerContent} from "./CustomMap"
// User class that is required to implement
// specific interface, in this case MarkerContent
// interface implemenation is OPTIONAL
export class User implements MarkerContent {
  name: string
  location:{
    lat: number,
    lng: number
  }
  constructor(){
    //initalize
    this.init()
  }
  private init():void{
    this.name = faker.name.firstName()
    //needs to be in
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  /**
   * Marker info is used by CustomMap in order to show
   * popup info
   */
  markerInfo():string{
    return `
    <h1 class="popup-title">${this.name}</h1>
    <p class="popup-paragraph">This is user info!</p>
    <p class="popup-paragraph">${JSON.stringify(this.location)}</p>
    `
  }
}