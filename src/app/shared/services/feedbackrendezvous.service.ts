import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Publication} from '../../models/publication';
import {map, Observable} from 'rxjs';
import { RendezvousF } from 'src/app/models/rendezvousfeedback';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  getAllRdv(): Observable<RendezvousF[]> {
   return this.http.get<RendezvousF[]>('http://localhost:8084/GestVoyage/Rendezvous/' );
  }


  getRatingRv(idRv): Observable<number> {
    return this.http.get<number>('http://localhost:8084/GestVoyage/FeedBack/rating/'+idRv)    }


}
