import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AseoPage } from './aseo.page';

describe('AseoPage', () => {
  let component: AseoPage;
  let fixture: ComponentFixture<AseoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AseoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
