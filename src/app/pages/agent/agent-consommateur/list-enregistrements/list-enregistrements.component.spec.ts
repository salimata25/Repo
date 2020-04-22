import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnregistrementsComponent } from './list-enregistrements.component';

describe('ListEnregistrementsComponent', () => {
  let component: ListEnregistrementsComponent;
  let fixture: ComponentFixture<ListEnregistrementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnregistrementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnregistrementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
