import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RendervousService {

  cserver_uri = environment.api_base_url;
  constructor(private http: HttpClient) { }

  getRendervous() {
    return this.http.get(this.cserver_uri + `/rendervous`);
  }
  sendRendervous(rendervous) {
    return this.http.post(this.cserver_uri + `/rendervous`, rendervous);
  }
  deleteRendervous(id) {
    return this.http.delete(this.cserver_uri + `/rendervous/${id}`);
  }
  updateRendervous(rendervous) {
    return this.http.put(this.cserver_uri + `/rendervous`, rendervous);
  }
  getRendervousById(id) {
    return this.http.get(this.cserver_uri + `/rendervous/${id}`);
  }
  
}
