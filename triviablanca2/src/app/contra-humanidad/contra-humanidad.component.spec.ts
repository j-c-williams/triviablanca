import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraHumanidadComponent } from './contra-humanidad.component';

describe('ContraHumanidadComponent', () => {
  let component: ContraHumanidadComponent;
  let fixture: ComponentFixture<ContraHumanidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContraHumanidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraHumanidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
