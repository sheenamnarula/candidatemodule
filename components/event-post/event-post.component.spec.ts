/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventPostComponent } from './event-post.component';

describe('EventPostComponent', () => {
  let component: EventPostComponent;
  let fixture: ComponentFixture<EventPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
