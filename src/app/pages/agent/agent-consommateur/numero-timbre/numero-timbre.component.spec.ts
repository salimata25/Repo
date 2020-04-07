import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroTimbreComponent } from './numero-timbre.component';

describe('NumeroTimbreComponent', () => {
  let component: NumeroTimbreComponent;
  let fixture: ComponentFixture<NumeroTimbreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroTimbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroTimbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
