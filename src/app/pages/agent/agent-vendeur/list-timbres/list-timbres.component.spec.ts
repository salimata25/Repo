import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimbresComponent } from './list-timbres.component';

describe('ListTimbresComponent', () => {
  let component: ListTimbresComponent;
  let fixture: ComponentFixture<ListTimbresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTimbresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTimbresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
