import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { RendezvousF } from 'src/app/models/rendezvousfeedback';
import { FeedBack } from 'src/app/models/feedback';
import { EmployeeF } from 'src/app/models/employeefeedback';


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

    getListFeedback(idRv):  Observable<number[]> {
      return this.http.get<number[]>('http://localhost:8084/GestVoyage/FeedBack/list/'+idRv , {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm4iLCJpYXQiOjE2NTg3NDI4NzEsImV4cCI6MTY1ODgyOTI3MX0.P_ceKu5StAGPVvr-2jlxc146oFmafS0GIz0D7nYNPrblcHbZ5nb3NH-8_NL4G2GGiGwW603BtkBmIDaOIbtp7w`
          }
       });
   
  
      }


    getFeedback(id):  Observable<FeedBack> {
      return this.http.get<FeedBack>('http://localhost:8084/GestVoyage/FeedBack/'+id , {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm4iLCJpYXQiOjE2NTg3NDI4NzEsImV4cCI6MTY1ODgyOTI3MX0.P_ceKu5StAGPVvr-2jlxc146oFmafS0GIz0D7nYNPrblcHbZ5nb3NH-8_NL4G2GGiGwW603BtkBmIDaOIbtp7w`
          }
       });
   
  
      }

      getUser(id):  Observable<EmployeeF> {
        return this.http.get<EmployeeF>('http://localhost:8084/GestVoyage/FeedBack/getuser/'+id , {
           headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm4iLCJpYXQiOjE2NTg3NDI4NzEsImV4cCI6MTY1ODgyOTI3MX0.P_ceKu5StAGPVvr-2jlxc146oFmafS0GIz0D7nYNPrblcHbZ5nb3NH-8_NL4G2GGiGwW603BtkBmIDaOIbtp7w`
            }
         });
     
    
        }

        addFeedback(feedback : FeedBack):  Observable<any> {
          return this.http.post<any>('http://localhost:8084/GestVoyage/FeedBack/' , feedback , {
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbm4iLCJpYXQiOjE2NTg3NDI4NzEsImV4cCI6MTY1ODgyOTI3MX0.P_ceKu5StAGPVvr-2jlxc146oFmafS0GIz0D7nYNPrblcHbZ5nb3NH-8_NL4G2GGiGwW603BtkBmIDaOIbtp7w`
             }
          });
      
          }


}
