import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Reaction} from '../../models/reaction';

@Injectable({
  providedIn: 'root'
})
export class ReactionserviceService {

  erver_uri = environment.api_base_url;
  constructor(private http: HttpClient) { }
  addComt(reaction: Reaction): Observable<Reaction> {
    return this.http.post<Reaction>(environment.api_base_url + `/ajouterReact`, reaction)
      .pipe(map(res => {
        return res;
      }));
  }
  updatePub(id: number, reaction: Reaction): Observable<Reaction> {
    return this.http.put<Reaction>(environment.api_base_url + `/modifierReact/` + id, reaction)
      .pipe(map(res => {
        return res;
      }));
  }
  deletePub(id: number): Observable<any> {
    return this.http.delete<Reaction>(environment.api_base_url + `/supprimerReact/` + id)
      .pipe(map(res => {
        return res;
      }));
  }
  getPub(): Observable<Reaction[]> {
    return this.http.get<Reaction[]>(environment.api_base_url + `/listeReact`)
      .pipe(map(res => {
        return res;
      }));
  }
}
