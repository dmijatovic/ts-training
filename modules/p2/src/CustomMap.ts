/**
 * Custom Map class using GoogleMaps.
 * Access to GMaps outside of class is restricted by setting gMap to private.
 *
 */

// import {google} from 'googlemaps'
// declare var google:google

export interface MarkerContent{
  location:{
    lat: number,
    lng: number
  },
  markerInfo?: ()=>string
}

export class CustomMap{
  //limit direct access to Gmap
  private gMap: google.maps.Map
  markers:google.maps.Marker[] = []

  constructor(mapDiv:HTMLElement, mapOptions:google.maps.MapOptions){
    this.gMap = new google.maps.Map(mapDiv,mapOptions)
  }

  addMarker(markerContent:MarkerContent):google.maps.Marker{
  // addMarker(position:google.maps.LatLngLiteral){
    console.log("adding marker...", markerContent)
    const marker = new google.maps.Marker({
      map: this.gMap,
      position: markerContent.location
    })
    this.markers.push(marker)

    //add marker info
    if (markerContent.markerInfo){
      //create info
      const info = this.createInfoWindow(markerContent.markerInfo())
      //add listener
      this.addInfoToMarkerEvent(marker,info)
    }

    return marker
  }

  createInfoWindow(html:string, options?:google.maps.InfoWindowOptions):google.maps.InfoWindow{
    const info = new google.maps.InfoWindow({
      ...options,
      content: html
    })
    return info
  }
  /**
   * Add info to marker on event
   * @param marker
   * @param info
   * @param event
   */
  addInfoToMarkerEvent(marker:google.maps.Marker,
    info:google.maps.InfoWindow, event:string='click'):void{
    marker.addListener(event,(e)=>{
      //show info on click
      console.log("Clicked on...", e)
      info.open(this.gMap, marker)
    })
  }
}