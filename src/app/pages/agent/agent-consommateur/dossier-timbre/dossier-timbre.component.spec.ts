import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierTimbreComponent } from './dossier-timbre.component';

describe('DossierTimbreComponent', () => {
  let component: DossierTimbreComponent;
  let fixture: ComponentFixture<DossierTimbreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossierTimbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierTimbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
