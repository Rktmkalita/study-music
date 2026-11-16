import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ChillhopComponent } from './chillhop.component';

describe('ChillhopComponent', () => {
  let component: ChillhopComponent;
  let fixture: ComponentFixture<ChillhopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChillhopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChillhopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
