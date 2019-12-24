import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCalanderKitchenSinkComponent } from './angular-calander-kitchen-sink.component';

describe('AngularCalanderKitchenSinkComponent', () => {
  let component: AngularCalanderKitchenSinkComponent;
  let fixture: ComponentFixture<AngularCalanderKitchenSinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCalanderKitchenSinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCalanderKitchenSinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
