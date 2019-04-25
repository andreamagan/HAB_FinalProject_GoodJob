import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { SearchI, collections } from 'src/app/shared/models/search.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  constructor(private http: HttpClient) { }

  search(text: string, collection: number) {

    if (collection === collections.jobs) {
      return this.http.get<SearchI>(`${environment.apiBaseUrl}/search/jobs`, { params: { keyword: text } });
    } else if (collection === collections.players) {
      return this.http.get<SearchI>(`${environment.apiBaseUrl}/search/players`, { params: { keyword: text } });
    } else if (collection === collections.teams) {
      return this.http.get<SearchI>(`${environment.apiBaseUrl}/search/teams`, { params: { keyword: text } });
    }
  }

  // searchJobs(text: string) {
  //   return this.http.get<SearchI>(`${environment.apiBaseUrl}/search/jobs`, { params: { keyword: text } });
  // }

  // searchPlayers(text: string) {
  //   return this.http.get<SearchI>(`${environment.apiBaseUrl}/search/players`, { params: { keyword: text } });
  // }

  // searchTeams(text: string) {
  //   return this.http.get<SearchI>(`${environment.apiBaseUrl}/search/teams`, { params: { keyword: text } });
  // }
}