import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaufortComponent } from './beaufort.component';

describe('BeaufortComponent', () => {
  let component: BeaufortComponent;
  let fixture: ComponentFixture<BeaufortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeaufortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeaufortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
