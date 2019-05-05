import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private http: HttpClient
  ) { }

  get(url, options?): Observable<any> {
    options = options ? options : this.defaultOptions();
    return this.http.get<any>(url, options);
  }

  post(url, body, options?): Observable<any> {
    options = options ? options : this.defaultOptions();
    return this.http.post<any>(url, body, options);
  }

  put(url, body, options?): Observable<any> {
    options = options ? options : this.defaultOptions();
    return this.http.put<any>(url, body, options);
  }

  delete(url, options?): Observable<any> {
    options = options ? options : this.defaultOptions();
    return this.http.delete<any>(url, options);
  }

  textOptions(token?) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    return { headers: headers, responseType: 'text' };
  }

  JSONOptions(token?) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    return { headers: headers };
  }

  JSONWithParams(token?, queryParams?) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    let params = new HttpParams();
    for (const p of queryParams) {
      params = params.append(p.name, p.value);
    }
    return { headers: headers, params: params };
  }

  defaultOptions() {
    return this.JSONOptions();
  }

  onlyTokenHeader(token) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + token);
    return { headers: headers, responseType: 'text' };
  }

  imageFileHeaders(token) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + token);
    return { headers: headers, responseType: 'blob' };
  }

}
