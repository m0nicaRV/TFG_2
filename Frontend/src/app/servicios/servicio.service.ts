import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) {}

  create(servicio: FormData): Observable<any> {
    const headers= new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post('http://127.0.0.1:8000/api/store', servicio,( {headers: headers}));
  }

  getAll(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/servicios');
  }
}
