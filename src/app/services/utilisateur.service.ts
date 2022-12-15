import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';




@Injectable({ providedIn: 'root' })
export class UtilisateurService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Utilisateur[]>('http://localhost:8015/api/utilisateurs');
    }

    getAllByNomRole(nomRole: string){
        return this.http.get<Utilisateur[]>(`http://localhost:8015/api/utilisateurs/roles/${nomRole}`);
    }

    merge(utilisateur: Utilisateur) {
        return this.http.put('http://localhost:8015/api/utilisateurs', utilisateur);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:8015/api/utilisateurs/${id}`);
    }
    

    getById(id:number)
    {
        return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateurs/${id}`)
    }

    getByUsername(username: string)
    {
        return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateur/${username}`)
    }
}