import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirUtilisateurComponent } from './voir-utilisateur.component';

describe('VoirUtilisateurComponent', () => {
  let component: VoirUtilisateurComponent;
  let fixture: ComponentFixture<VoirUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
