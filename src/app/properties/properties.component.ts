import { Component } from '@angular/core';
import { FormStateService } from '../state/form-state.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
constructor(public state: FormStateService) {}
}
