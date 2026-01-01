import { Component, signal } from '@angular/core';
import { EnteteComponent } from './entete/entete';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [EnteteComponent],
  styleUrls: ['./app.scss'],
})
export class App {
  public readonly title = signal('cv_bootstrap');
}
