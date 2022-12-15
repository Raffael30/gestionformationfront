import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Message[]>('http://localhost:8015/api/messages')
  }

  getById(id:number)
  {
    return this.http.get<Message>(`http://localhost:8015/api/messages/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete<Message>(`http://localhost:8015/api/messages/${id}`) 
  }

  merge(message:Message)
  {
    return this.http.put<Message>('http://localhost:8015/api/messages', message) 
  }
}
