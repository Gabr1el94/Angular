import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelariaComponent } from './hotelaria.component';

describe('HotelariaComponent', () => {
  let component: HotelariaComponent;
  let fixture: ComponentFixture<HotelariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
