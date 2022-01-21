import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMateriaComponent } from './dialog-materia.component';

describe('DialogMateriaComponent', () => {
  let component: DialogMateriaComponent;
  let fixture: ComponentFixture<DialogMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
