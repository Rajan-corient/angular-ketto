import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangeBoxComponent } from './change-box.component';

describe('ChangeBoxComponent', () => {
  let component: ChangeBoxComponent;
  let fixture: ComponentFixture<ChangeBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
