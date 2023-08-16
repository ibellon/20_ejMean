import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';

import { TareaService } from './shared/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    TareaListaComponent,
    EditTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
