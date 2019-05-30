import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineComponentComponent } from './engine-component.component';

describe('EngineComponentComponent', () => {
  let component: EngineComponentComponent;
  let fixture: ComponentFixture<EngineComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
