import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionVenteComponent } from './impression-vente.component';

describe('ImpressionVenteComponent', () => {
  let component: ImpressionVenteComponent;
  let fixture: ComponentFixture<ImpressionVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressionVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressionVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
