import { Component } from '@angular/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CommonModule } from '@angular/common';
import { TableColumn } from './models/table-col';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  columns:TableColumn[] = [
    { field: 'select', header: '', type: 'checkbox' },
    { field: 'name', header: 'Name', type: 'string' },
    { field: 'created', header: 'Created Date', type: 'date' },
    { field: 'edit', header: 'Edit', type: 'button', buttonAction: 'edit', buttonClass: 'p-button-warning' },
    { field: 'delete', header: 'Delete', type: 'button', buttonAction: 'delete', buttonClass: 'p-button-danger' },
  ];

  data = [
    { id: 1, name: 'File A', created: new Date(2024, 5, 12) },
    { id: 2, name: 'File B', created: new Date(2024, 6, 5) },
    { id: 3, name: 'File C', created: new Date(2024, 7, 20) },
  ];

    expandedColumns: TableColumn[] = [
    { field: 'email', header: 'Email' },
    { field: 'address', header: 'Address' },
  ];

  handleTableAction(event: { type: string |undefined, row: any }) {
    console.log(`Action: ${event.type}`, event.row);

    if (event.type === 'edit') {
      alert(`Editing: ${event.row.name}`);
    }
    if (event.type === 'delete') {
      alert(`Deleting: ${event.row.name}`);
    }
  }
}
