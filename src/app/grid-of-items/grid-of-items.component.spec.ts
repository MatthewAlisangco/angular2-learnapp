import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOfItemsComponent } from './grid-of-items.component';

describe('GridOfItemsComponent', () => {
  let component: GridOfItemsComponent;
  let fixture: ComponentFixture<GridOfItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOfItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOfItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
