import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuristicoComponent } from './turistico.component';

describe('TuristicoComponent', () => {
  let component: TuristicoComponent;
  let fixture: ComponentFixture<TuristicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
