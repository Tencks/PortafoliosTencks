import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProjectosComponent } from './mis-projectos.component';

describe('MisProjectosComponent', () => {
  let component: MisProjectosComponent;
  let fixture: ComponentFixture<MisProjectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisProjectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisProjectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
