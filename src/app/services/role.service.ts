import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get<Role>(`http://localhost:8015/api/roles/${id}`);
  }

  getAll() {
    return this.http.get<Role[]>('http://localhost:8015/api/roles');
  }

  merge(role: Role) {
    return this.http.post<Role>('http://localhost:8015/api/roles', role);
  }
  
  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/roles/${id}`);
  }

}
