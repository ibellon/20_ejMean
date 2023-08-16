import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareaModel } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  getAllTareas() {
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas');
  }
}
