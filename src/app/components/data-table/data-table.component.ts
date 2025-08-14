import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TableColumn } from '../../models/table-col';
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, CheckboxModule, ButtonModule, FormsModule, CalendarModule],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  
  @Output() action = new EventEmitter<{ type: string|undefined, row: any }>();
  selectedItems: any[] = [];


toggleAllSelection() {
  if (this.isAllSelected()) {
    this.selectedItems = [];
  } else {
    this.selectedItems = [...this.data];
  }
}
  
  isAllSelected(): boolean {
  return this.data.length > 0 && this.selectedItems.length === this.data.length;
}

    onButtonClick(action :string |undefined ,item: any) {
    
    this.action.emit({ type: action, row: item });
  }
}