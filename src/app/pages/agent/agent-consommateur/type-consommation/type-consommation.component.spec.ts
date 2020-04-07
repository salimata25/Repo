import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeConsommationComponent } from './type-consommation.component';

describe('TypeConsommationComponent', () => {
  let component: TypeConsommationComponent;
  let fixture: ComponentFixture<TypeConsommationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeConsommationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeConsommationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
