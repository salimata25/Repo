import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentConsommateurComponent } from './agent-consommateur.component';

describe('AgentConsommateurComponent', () => {
  let component: AgentConsommateurComponent;
  let fixture: ComponentFixture<AgentConsommateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentConsommateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentConsommateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
