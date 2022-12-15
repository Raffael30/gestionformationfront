import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMessageComponent } from './gestion-message.component';

describe('GestionMessageComponent', () => {
  let component: GestionMessageComponent;
  let fixture: ComponentFixture<GestionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
