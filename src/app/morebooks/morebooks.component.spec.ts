import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorebooksComponent } from './morebooks.component';

describe('MorebooksComponent', () => {
  let component: MorebooksComponent;
  let fixture: ComponentFixture<MorebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorebooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
