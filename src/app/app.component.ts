import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomInputComponent, IonApp, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-cva';
}
