import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {


  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Formation[]>('http://localhost:8015/api/formations')
  }

  getById(id:number)
  {
    return this.http.get<Formation>(`http://localhost:8015/api/formations/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete<Formation>(`http://localhost:8015/api/formations/${id}`) 
  }

  merge(formation:Formation)
  {
    console.log('dans le service')
    console.log(formation.utilisateurs);
    return this.http.put<Formation>('http://localhost:8015/api/formations', formation) 
  }

  getByUtilisateursId(id:number)
  {
    return this.http.get<Formation[]>(`http://localhost:8015/api/formationsParUtilisateur/${id}`)
  }

  getByNom(nom:string)
  {
    return this.http.get<Formation[]>(`http://localhost:8015/api/formationsParNomFormation/${nom}`)
  }
}
