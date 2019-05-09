import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchURL = 'http://3.92.127.159:5000/search'
  constructor(private http: HttpClient) { }

  search = () => {
    return this.http.get<SearchMainResponse[]>(this.searchURL);
  }
}
