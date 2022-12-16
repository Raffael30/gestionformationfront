import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statut } from '../models/statut';

@Injectable({
  providedIn: 'root'
})
export class StatutService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get<Statut>(`http://localhost:8015/api/statuts/${id}`);
  }

  getAll() {
    return this.http.get<Statut[]>('http://localhost:8015/api/statuts');
  }

  getAllByType(type: string, general: string){
    return this.http.get<Statut[]>(`http://localhost:8015/api/statuts/type/${type}/general/${general}`);
  }

  merge(statut: Statut) {
    return this.http.post<Statut>('http://localhost:8015/api/statuts', statut);
  }
  
  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/statuts/${id}`);
  }
}
