import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocompComponent } from './democomp.component';

describe('DemocompComponent', () => {
  let component: DemocompComponent;
  let fixture: ComponentFixture<DemocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
