import { Component } from '@angular/core';
import { FormStateService } from '../state/form-state.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {
constructor(public state: FormStateService) {}
}
