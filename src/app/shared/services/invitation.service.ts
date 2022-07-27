import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  server_uri = environment.api_base_url;
  constructor(private http: HttpClient) { }
  getListInvitation() {
    return this.http.get(this.server_uri + `/listeInvitation`);
  }
  sendInvitation(invitation) {
    return this.http.post(this.server_uri + `/invitation`, invitation);
  }
  deleteInvitation(id) {
    return this.http.delete(this.server_uri + `/invitation/${id}`);
  }
  updateInvitation(invitation) {
    return this.http.put(this.server_uri + `/invitation`, invitation);
  }
  getInvitation(id) {
    return this.http.get(this.server_uri + `/invitation/${id}`);
  }
  
}
