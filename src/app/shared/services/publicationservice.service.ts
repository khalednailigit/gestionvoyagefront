import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Publication} from '../../models/publication';
import {map, Observable} from 'rxjs';
import {RendezvousF} from '../../models/rendezvousfeedback';



@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  server_uri = environment.api_base_url;
  constructor(private http: HttpClient) { }
  addPub(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(environment.api_base_url + `/pub/ajouterPub`, publication)
      .pipe(map(res => {
        return res;
      }));
  }
  updatePub(id: number, publication: Publication): Observable<Publication> {
    return this.http.put<Publication>(environment.api_base_url + `/pub/modifierPub/` + id, publication)
      .pipe(map(res => {
        return res;
      }));
  }

  deletePub(id: Publication): Observable<any> {
    return this.http.delete<Publication>(environment.api_base_url + `/pub/supprimerPub/` + id)
      .pipe(map(res => {
        return res;
      }));
  }
  getPub(): Observable<Publication[]> {
    return this.http.get<Publication[]>(environment.api_base_url + `/pub/listePub`);

  }
  getPublicationById(id: number): Observable<Publication> {
    return this.http.get<Publication>(environment.api_base_url + `/pub/` + id)
      .pipe(map(res => {
        return res;
      }));
  }
  uploadImage(file) {
    const data = new FormData();
    data.append('image', file, file.name);
    return this.http.post<any>(environment.api_base_url + '/pub/upload', data)
      .pipe(map(res => {
        return res;
      }));
  }

}
