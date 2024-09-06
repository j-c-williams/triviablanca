import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMakerComponent } from './the-maker.component';

describe('TheMakerComponent', () => {
  let component: TheMakerComponent;
  let fixture: ComponentFixture<TheMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
