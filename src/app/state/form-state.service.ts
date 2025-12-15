import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Field {
  id: number;
  type: 'input' | 'checkbox' | 'button';
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormStateService {

 private fieldsSubject = new BehaviorSubject<Field[]>([
    { id: 1, type: 'input', label: 'First Name' },
    { id: 2, type: 'checkbox', label: 'Accept Terms' },
    { id: 3, type: 'button', label: 'Submit' }
  ]);

  fields$ = this.fieldsSubject.asObservable();

  private selectedFieldSubject = new BehaviorSubject<Field | null>(null);
  selectedField$ = this.selectedFieldSubject.asObservable();

  selectField(field: Field) {
    this.selectedFieldSubject.next(field);
  }

  updateLabel(newLabel: string) {
    const selected = this.selectedFieldSubject.value;
    if (!selected) return;

    // Immutable update
    const updatedFields = this.fieldsSubject.value.map(field =>
      field.id === selected.id
        ? { ...field, label: newLabel }
        : field
    );

    this.fieldsSubject.next(updatedFields);

    // Update selected reference
    const updatedSelected =
      updatedFields.find(f => f.id === selected.id) ?? null;

    this.selectedFieldSubject.next(updatedSelected);
  }
}
