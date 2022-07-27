import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8084/GestVoyage/api/test/';
const USER_URL = 'http://localhost:8084/GestVoyage/user/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'company', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'employee', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getFromId(user:any): Observable<any> {
    return this.http.get(
      USER_URL + user.id,httpOptions
    );
  }
  getActivityType(): Observable<any> {
    return this.http.get(
      USER_URL + "http://localhost:8084/GestVoyage/ActivityType/listActivityType",httpOptions
    );
  }

}