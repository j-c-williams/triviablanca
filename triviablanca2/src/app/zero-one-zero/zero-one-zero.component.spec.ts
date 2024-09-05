import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroOneZeroComponent } from './zero-one-zero.component';

describe('ZeroOneZeroComponent', () => {
  let component: ZeroOneZeroComponent;
  let fixture: ComponentFixture<ZeroOneZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeroOneZeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeroOneZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
