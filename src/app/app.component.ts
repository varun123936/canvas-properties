import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { CanvasComponent } from './canvas/canvas.component';
import { FormStateService } from './state/form-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropertiesComponent, CanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'canvas-properties2';

  constructor(private state: FormStateService) { }

  exportHtml() {
    const fields = this.state.getSnapshot();

    let html = `
<!DOCTYPE html>
<html>
<head>
  <title>Generated Form</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    .form-group { margin-bottom: 15px; }
  </style>
</head>
<body>

<h2>Generated Form</h2>
<form>
`;

    fields.forEach(f => {
      if (f.type === 'input') {
        html += `
  <div class="form-group">
    <label>${f.label}</label>
    <input type="text" />
  </div>`;
      }

      if (f.type === 'checkbox') {
        html += `
  <div class="form-group">
    <label>
      <input type="checkbox" /> ${f.label}
    </label>
  </div>`;
      }

      if (f.type === 'button') {
        html += `
  <button type="submit">${f.label}</button>`;
      }
    });

    html += `
</form>
</body>
</html>`;

    this.download(html, 'form.html');
  }

  download(content: string, name: string) {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();

    URL.revokeObjectURL(url);
  }
}
