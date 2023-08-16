import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';

const routes: Routes = [
  {path:'tareas', component: TareaListaComponent},
  {path:'tareas/:id/edit', component: EditTareaComponent},
  {path: 'tareas/new', component: EditTareaComponent},
  {path: '**', redirectTo: '/tareas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
