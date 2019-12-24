import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLiveComponent } from './template-live.component';

describe('TemplateLiveComponent', () => {
  let component: TemplateLiveComponent;
  let fixture: ComponentFixture<TemplateLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
