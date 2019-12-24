import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateActivityComponent } from './template-activity.component';

describe('TemplateActivityComponent', () => {
  let component: TemplateActivityComponent;
  let fixture: ComponentFixture<TemplateActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
