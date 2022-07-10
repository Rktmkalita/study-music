import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimevibeComponent } from './animevibe.component';

describe('AnimevibeComponent', () => {
  let component: AnimevibeComponent;
  let fixture: ComponentFixture<AnimevibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimevibeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimevibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
