import faker from 'faker'

export class Company {
  name:string
  catchPhrase: string
  location:{
    lat: number,
    lng: number
  }
  constructor(){
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    // it needs to init object
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
    <p class="popup-paragraph">This is company info!</p>
    <p class="popup-paragraph">${this.catchPhrase}</p>
    `
  }
}