import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css']
})
export class TareaListaComponent implements OnInit{
  
  public tareas: TareaModel[] = [];

  constructor(private tareaService: TareaService){
  }
  
  ngOnInit(): void {
   this.tareaService.getAllTareas().subscribe(result => {
      this.tareas = result;
      console.log(this.tareas);
   });
  }

}
