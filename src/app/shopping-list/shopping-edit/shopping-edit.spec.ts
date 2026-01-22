import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingEdit } from './shopping-edit';

describe('ShoppingEdit', () => {
  let component: ShoppingEdit;
  let fixture: ComponentFixture<ShoppingEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
