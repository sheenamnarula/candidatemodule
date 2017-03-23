/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppbarComponent } from './appbar.component';

describe('AppbarComponent', () => {
  let component: AppbarComponent;
  let fixture: ComponentFixture<AppbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
