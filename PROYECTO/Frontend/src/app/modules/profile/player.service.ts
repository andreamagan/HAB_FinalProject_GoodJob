import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Player } from 'src/app/shared/models/player.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) { }

  getPlayerProfile() {
    return this.http.get<Player>(`${environment.apiBaseUrl}/player`);
  }

  updateUserProfile(profile: Player) {
    return this.http.put<Player>(`${environment.apiBaseUrl}/user`, profile);
  }

  uploadAvatar(image: File) {
    const formData = new FormData();

    formData.append('avatar', image);

    return this.http.post(`${environment.apiBaseUrl}/player/avatar`, formData, {
      observe: 'response'
    });
  }

}