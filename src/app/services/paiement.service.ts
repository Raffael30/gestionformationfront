import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../models/paiement';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Paiement[]>('http://localhost:8015/api/paiements')
  }

  getById(id:number)
  {
    return this.http.get<Paiement>(`http://localhost:8015/api/paiements/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete<Paiement>(`http://localhost:8015/api/paiements/${id}`) 
  }

  merge(paiement:Paiement)
  {
    return this.http.put<Paiement>('http://localhost:8015/api/paiements', paiement) 
  }

  getByIdFormation(id:number)
  {
    return this.http.get<Paiement[]>(`http://localhost:8015/api/paiementsParIdFormation/${id}`)
  }

  getByIdUtilisateur(id:number)
  {
    return this.http.get<Paiement[]>(`http://localhost:8015/api/paiementsParIdUtilisateur/${id}`)
  }

  getByIdUtilisateurAndIdFormation(idFormation:number, idUtilisateur:number)
  {
    return this.http.get<Paiement[]>(`http://localhost:8015/api/paiementsParIdFormationAndIdUtilisateur/idFormation/${idFormation}/idUtilisateur/${idUtilisateur}`)
  }


}
