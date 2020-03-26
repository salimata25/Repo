import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentVendeurComponent } from './agent-vendeur.component';

describe('AgentVendeurComponent', () => {
  let component: AgentVendeurComponent;
  let fixture: ComponentFixture<AgentVendeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentVendeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
