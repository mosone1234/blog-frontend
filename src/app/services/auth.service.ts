import { Injectable } from '@angular/core';
import { WebService } from './web.service';
// import { SERVER } from '../config/server.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private webService: WebService
  ) { }

  // signup() {
  //   const URL = SERVER.URL_BASE + '/register';
  //   const headers = this.webService.JSONOptions();
  //   return this.webService.post(URL, this.webService.JSONOptions());
  // }

  // signin(user: any) {
  //   const URL = SERVER.URL_BASE + '/authenticate';
  //   return this.webService.post(URL, user, this.webService.defaultOptions());
  // }

  // logout() {
  //   localStorage.removeItem('ha-token');
  //   sessionStorage.removeItem('ha-token');
  // }

  // getToken() {
  //   return sessionStorage.getItem('ha-token') ? sessionStorage.getItem('ha-token') : (localStorage.getItem('ha-token') ? localStorage.getItem('ha-token') : '');
  // }

}
