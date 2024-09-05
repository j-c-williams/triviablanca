import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstevaoComponent } from './estevao.component';

describe('EstevaoComponent', () => {
  let component: EstevaoComponent;
  let fixture: ComponentFixture<EstevaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstevaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstevaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
