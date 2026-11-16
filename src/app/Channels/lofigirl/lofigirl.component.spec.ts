import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LofigirlComponent } from './lofigirl.component';

describe('LofigirlComponent', () => {
  let component: LofigirlComponent;
  let fixture: ComponentFixture<LofigirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LofigirlComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
