import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
 providedIn: 'root'})

export class RecordsService {

  constructor(private http: HttpClient) { }
getRecordsService() {
  let url="https://rickandmortyapi.com/api/location/2";
  return this.http.get(url);
}
}
  

