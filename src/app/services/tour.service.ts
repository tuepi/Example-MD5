import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "../models/tour";

const API_URL = 'http://localhost:3000/tuors';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<Tour[]> {
    return this.httpClient.get<Tour[]>(API_URL);
  }

  getById(id : any) : Observable<Tour> {
    return this.httpClient.get<Tour>(API_URL + `/${id}`)
  }

  createTour(tour: any) : Observable<any> {
    return this.httpClient.post(API_URL, tour);
  }

  editTour(id: any , tour: any): Observable<any> {
    return this.httpClient.put(API_URL + `/${id}` , tour);
  }

  deleteTour(id : any) : Observable<any> {
    return this.httpClient.delete(API_URL + `/${id}`);
  }

}
