import { Component, OnInit } from '@angular/core';
import { TareaModel, TareasEstadoSelect } from '../shared/tarea.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {
  tarea: TareaModel = new TareaModel("", "", new Date(), "Por hacer");
  tareasEstadoSelect: any = [];

  constructor(private route: ActivatedRoute, private router: Router, 
    private tareaService: TareaService ){
  }

  ngOnInit(): void {
    this.tareasEstadoSelect = TareasEstadoSelect;
    this.route.params.subscribe(params => {
      if(params['id']) this.tareaService.getTarea(params['id']).subscribe(data => {
        console.log(data);
        this.tarea = data;
      });
    }, error => console.error(error));

  }

  onSubmit() {
    console.log("GUARDAR TAREA: ",this.tarea);
    if(this.tarea._id)
      this.tareaService.updateTarea(this.tarea).subscribe(data => {
        console.log(data);
        this.router.navigate(['/tareas']);
      }, error => console.error(error));
    else
      this.tareaService.addTarea(this.tarea).subscribe(data => {
        console.log(data);
        this.router.navigate(['/tareas']);
      }, error => console.error(error));
  }
}
