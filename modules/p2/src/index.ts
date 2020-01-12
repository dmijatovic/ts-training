/**
 * Google maps typescript demo project
 */


import {User} from "./User"
import {Company} from "./Company"
import {CustomMap} from "./CustomMap"

import "./index.css"

const user = new User()
const company = new Company()

console.log(user)
console.log(company)

const mapOptions={
  zoom:1,
  center:{
    lat:0,
    lng:0
  }
}
const mapDiv = document.getElementById('gmap')

const map = new CustomMap(mapDiv,mapOptions)

const userMarker = map.addMarker(user)
// const userInfo = map.createInfoWindow(`
// <h1 class="popup-title">${user.name}</h1>
// <p class="popup-paragraph">This is user info!</p>
// <p class="popup-paragraph">${JSON.stringify(user.location)}</p>
// `)
// map.addInfoToMarkerEvent(userMarker, userInfo)

const companyMarker = map.addMarker(company)
// const companyInfo = map.createInfoWindow(`
//   <h1 class="popup-title">${company.name}</h1>
//   <p class="popup-paragraph">This is company info!</p>
//   <p class="popup-paragraph">${company.catchPhrase}</p>
// `)

// map.addInfoToMarkerEvent(companyMarker,companyInfo)