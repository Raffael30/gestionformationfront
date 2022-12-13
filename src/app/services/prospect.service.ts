import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prospect } from '../models/prospect';


@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get<Prospect>(`http://localhost:8015/api/prospects/${id}`);
  }

  getAll() {
    return this.http.get<Prospect[]>('http://localhost:8015/api/prospects');
  }

  merge(prospect: Prospect) {
    return this.http.put<Prospect>('http://localhost:8015/api/prospects', prospect);
  }
  
  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/prospects/${id}`);
  }

}
