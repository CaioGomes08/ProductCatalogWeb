import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCategoryComponent } from './combo-category.component';

describe('ComboCategoryComponent', () => {
  let component: ComboCategoryComponent;
  let fixture: ComponentFixture<ComboCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
