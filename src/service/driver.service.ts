import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Driver } from '../model/driver.model';

@Injectable({
    providedIn: 'root'
})
export class DriverService {

    private baseUrl = 'http://localhost:8080/api/drivers';

    constructor(private http: HttpClient) {}

    getDriver(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    createDriver(driver: Driver): Observable<Object> {
        return this.http.post(this.baseUrl, driver);
    }

    updateDriver(driver: Driver): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${driver.id}`, driver);
    }

    deleteDriver(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    getDriversList(): Observable<any> {
        return this.http.get<Driver[]>(this.baseUrl);
    }

}