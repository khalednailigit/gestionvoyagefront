import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  API_URL = "http://localhost:8084/GestVoyage";
 
  headers = new HttpHeaders(
    {
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBaG1lZCIsImlhdCI6MTY1ODg3ODc3MywiZXhwIjoxNjU4OTY1MTczfQ.PBSMj0XBsjVwyuYjNrZs6-AT4HIVaBK3xIMF5InJ1W09XCsckuViVUUm1jafxxFjYyQOVim6PEwyV7LKjI4RSw', 
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )

  constructor(private httpClient:HttpClient) { }

  _getAllUsers(){
   return this.httpClient.get(this.API_URL +"/user/listEmployee",  { 'headers': this.headers })
  }
  _getAll(service){
    return this.httpClient.get(this.API_URL+service, { 'headers': this.headers });
  }
  _put(service, body, id?) {
    // tslint:disable-next-line: prefer-const
    var url = id ? `${this.API_URL}/${service}/${id}` : `${this.API_URL}/${service}`;
    return this.httpClient.put(url, body, { 'headers': this.headers });
}
_getById(service, id) {
  return this.httpClient.get(`${this.API_URL}/${service}/${id}`, { 'headers': this.headers });
}

_findbyDateofTravelLessThanEqual(service, date){
        return this.httpClient.get(`${this.API_URL}/${service}?dateTravel=${date}`, { 'headers': this.headers });
         
}

_findByDateTravelDateBetween(service, startDate, endDate){
  return this.httpClient.get(`${this.API_URL}/${service}?startDate=${startDate}&endDate=${endDate}`, { 'headers': this.headers });
   
}
_findByAddressContaining(service, address){
  return this.httpClient.get(`${this.API_URL}/${service}?address=${address}`, { 'headers': this.headers });
   
}

_post(service, body){
  return this.httpClient.post(`${this.API_URL}/${service}`, body, { 'headers': this.headers });

}
_delete(service, id) {
  return this.httpClient.delete(`${this.API_URL}/${service}/${id}`, { 'headers': this.headers });
}

  


}
