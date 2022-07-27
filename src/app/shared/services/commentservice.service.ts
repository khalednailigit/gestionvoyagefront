import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Publication} from '../../models/publication';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {

  server_uri = environment.api_base_url;
  constructor(private http: HttpClient) { }
  addComt(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(environment.api_base_url + `/ajouterComt`, comment)
      .pipe(map(res => {
        return res;
      }));
  }
  updatePub(id: number, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(environment.api_base_url + `/modifierComt/` + id, comment)
      .pipe(map(res => {
        return res;
      }));
  }
  deletePub(id: number): Observable<any> {
    return this.http.delete<Comment>(environment.api_base_url + `/supprimerComt/` + id)
      .pipe(map(res => {
        return res;
      }));
  }
  getPub(): Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.api_base_url + `/listeComt`)
      .pipe(map(res => {
        return res;
      }));
  }
}
