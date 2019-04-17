import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/shared/models/team.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) { }

  getTeamProfile() {
    return this.http.get<Team>(`${environment.apiBaseUrl}/team`);
  }

  updateTeamProfile(profile: Team) {
    return this.http.put<Team>(`${environment.apiBaseUrl}/team`, profile);
  }

  uploadAvatar(image: File) {
    const formData = new FormData();

    formData.append('avatar', image);

    return this.http.post(`${environment.apiBaseUrl}/team/avatar`, formData, {
      observe: 'response'
    });
  }
}