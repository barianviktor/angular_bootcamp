import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterComponent } from './creater.component';

describe('CreaterComponent', () => {
  let component: CreaterComponent;
  let fixture: ComponentFixture<CreaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
