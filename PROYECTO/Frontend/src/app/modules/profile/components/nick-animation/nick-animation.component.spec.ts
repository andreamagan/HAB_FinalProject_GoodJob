import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NickAnimationComponent } from './nick-animation.component';

describe('NickAnimationComponent', () => {
  let component: NickAnimationComponent;
  let fixture: ComponentFixture<NickAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NickAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NickAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
