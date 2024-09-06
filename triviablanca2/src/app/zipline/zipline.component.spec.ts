import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiplineComponent } from './zipline.component';

describe('ZiplineComponent', () => {
  let component: ZiplineComponent;
  let fixture: ComponentFixture<ZiplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZiplineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZiplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
