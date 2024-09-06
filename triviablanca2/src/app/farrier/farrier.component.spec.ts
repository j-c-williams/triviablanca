import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarrierComponent } from './farrier.component';

describe('FarrierComponent', () => {
  let component: FarrierComponent;
  let fixture: ComponentFixture<FarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
