import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rendezvous } from '../models/rendezvous';

@Injectable({ providedIn: 'root' })
export class RendezvousService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<Rendezvous[]>('http://localhost:8015/api/rendezvouss');
  }

  merge(rendezvous: Rendezvous) {
      return this.http.put('http://localhost:8015/api/rendezvouss', rendezvous);
  }

  supprimer(id: number) {
      return this.http.delete(`http://localhost:8015/api/rendezvouss/${id}`);
  }
  

  getById(id: number)
  {
      return this.http.get<Rendezvous>(`http://localhost:8015/api/rendezvouss/${id}`)
  }

}
