import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTareaComponent } from './edit-tarea.component';

describe('EditTareaComponent', () => {
  let component: EditTareaComponent;
  let fixture: ComponentFixture<EditTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTareaComponent]
    });
    fixture = TestBed.createComponent(EditTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
