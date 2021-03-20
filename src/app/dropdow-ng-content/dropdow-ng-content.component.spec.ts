import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowNgContentComponent } from './dropdow-ng-content.component';

describe('DropdowNgContentComponent', () => {
  let component: DropdowNgContentComponent;
  let fixture: ComponentFixture<DropdowNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
