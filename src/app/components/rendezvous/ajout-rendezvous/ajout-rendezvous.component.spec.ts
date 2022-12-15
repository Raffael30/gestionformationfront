import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRendezvousComponent } from './ajout-rendezvous.component';

describe('AjoutRendezvousComponent', () => {
  let component: AjoutRendezvousComponent;
  let fixture: ComponentFixture<AjoutRendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutRendezvousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutRendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
