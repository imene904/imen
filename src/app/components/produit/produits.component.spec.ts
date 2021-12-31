import { ComponentFixture, TestBed } from '@angular/core/testing';

import { produitsComponent } from './produits.component';

describe('EcharpesComponent', () => {
  let component: produitsComponent;
  let fixture: ComponentFixture<produitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ produitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(produitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
