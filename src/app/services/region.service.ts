import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get<Region>(`http://localhost:8015/api/regions/${id}`);
  }

  getAll() {
    return this.http.get<Region[]>('http://localhost:8015/api/regions');
  }

  merge(region: Region) {
    return this.http.post<Region>('http://localhost:8015/api/regions', region);
  }
  
  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/regions/${id}`);
  }

}
