import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PropertiesComponent,CanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'canvas-properties2';
}
