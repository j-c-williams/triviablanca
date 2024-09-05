import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobbComponent } from './cobb.component';

describe('CobbComponent', () => {
  let component: CobbComponent;
  let fixture: ComponentFixture<CobbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CobbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
