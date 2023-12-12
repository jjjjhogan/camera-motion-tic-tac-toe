import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerPanelComponent } from './winner-panel.component';

describe('WinnerPanelComponent', () => {
  let component: WinnerPanelComponent;
  let fixture: ComponentFixture<WinnerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
