import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuckComponent } from './zuck.component';

describe('ZuckComponent', () => {
  let component: ZuckComponent;
  let fixture: ComponentFixture<ZuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZuckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
