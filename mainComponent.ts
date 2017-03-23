import { AppRoutingModule } from './app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import {} from 'jasmine';

@Component({
  selector: 'main-component',
  template: '<router-outlet></router-outlet>',
  
})
export class MainComponent {
  title = 'Samarthya Candidate';
}
