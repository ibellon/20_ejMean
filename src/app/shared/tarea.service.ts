import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareaModel } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  options = {'withCredentials': false, 
  'access-control-allow-origin': 'http://localhost:4200/api/tareas/', 
  'content-type': 'application/json',
  'Access-Control-Allow-Credentials': false, 
  'Access-Control-Allow-Methods': 'OPTIONS',
  'access-control-allow-headers': '*'};

  constructor(private http: HttpClient) {
  }

  getAllTareas() {
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas/');
  }

  getTarea(id: string){
    return this.http.get<TareaModel>('http://localhost:3000/api/tareas/'+id);
  }

  addTarea(tarea: TareaModel) {
    return this.http.post<TareaModel>('http://localhost:3000/api/tareas/', {
      titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado
    });
  }

  updateTarea(tarea: TareaModel) {
    return this.http.put<TareaModel>('http://localhost:3000/api/tareas/'+tarea._id, {
      titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado
    });
  }

  deleteTarea(id: string) {    
    return this.http.delete<string>('http://localhost:3000/api/tareas/'+id);
  }
}
