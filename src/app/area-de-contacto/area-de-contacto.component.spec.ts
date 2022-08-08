import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeContactoComponent } from './area-de-contacto.component';

describe('AreaDeContactoComponent', () => {
  let component: AreaDeContactoComponent;
  let fixture: ComponentFixture<AreaDeContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
