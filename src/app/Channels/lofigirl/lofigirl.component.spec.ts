import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofigirlComponent } from './lofigirl.component';

describe('LofigirlComponent', () => {
  let component: LofigirlComponent;
  let fixture: ComponentFixture<LofigirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LofigirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LofigirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
