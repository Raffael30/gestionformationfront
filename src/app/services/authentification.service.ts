import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

  authenticate(username:string, password:string){
    return this.http.post<any>('http://localhost:8015/loginUserJwt', {username, password});
  }

  findByUsername(username:String)
  {
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateur/${username}`);
  }

}