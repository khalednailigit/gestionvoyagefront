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
   return this.http.get<RendezvousF[]>('http://localhost:8084/GestVoyage/Rendezvous/' , {
      headers: {
         'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm4iLCJpYXQiOjE2NTg2NTU5MDgsImV4cCI6MTY1ODc0MjMwOH0.q2yEfFbjH2-aJazpqTFtaW7kU020d6leRI9i2KWed0no03nGZ-hImBwa5N7ttkOK6Q3EWUBk7VVPkR9qATt_EQ`
      }
    });
  }


  getRatingRv(idRv): Observable<number> {
    return this.http.get<number>('http://localhost:8084/GestVoyage/FeedBack/rating/'+idRv , {
       headers: {
          'Content-Type': 'application/json',
         'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm4iLCJpYXQiOjE2NTg2NTU5MDgsImV4cCI6MTY1ODc0MjMwOH0.q2yEfFbjH2-aJazpqTFtaW7kU020d6leRI9i2KWed0no03nGZ-hImBwa5N7ttkOK6Q3EWUBk7VVPkR9qATt_EQ`
       }
     });
 

    }


}
