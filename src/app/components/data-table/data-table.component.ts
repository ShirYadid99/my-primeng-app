import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TableColumn } from '../../models/table-col';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule} from 'primeng/skeleton';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, CheckboxModule, ButtonModule, FormsModule, CalendarModule,TooltipModule,SkeletonModule],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  // Expanded row config
  @Input() expandedColumns: TableColumn[] = [];
  @Input() expandedData: { [key: string]: any[] } = {}; // mock API data storage





  @Output() loadExpandedData = new EventEmitter<any>(); // parent will handle API call
  @Output() action = new EventEmitter<{ type: string | undefined, row: any }>();
  @Output() loadNext = new EventEmitter<number>(); // new event for lazy loading


  selectedItems: any[] = [];
  expandedRows: any = {}; 

  @ViewChild('tableWrapper') tableWrapper!: ElementRef<HTMLDivElement>;

  isLoading = false;
  private loading = false; // 👉 track loading state for skeletons
  private page = 0; // 👉 track page inside table

  ngAfterViewInit() {
    if (this.tableWrapper) {
      this.tableWrapper.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  private onScroll(event: any) {
  const el = event.target;
  const threshold = 150;
  if (!this.isLoading && el.scrollTop + el.clientHeight >= el.scrollHeight - threshold) {
    this.isLoading = true;
    this.loading = true; // 👉 show skeletons
    this.page++;
    this.loadNext.emit(this.page);
  }
}

appendData(newData: any[]) {
  if (newData.length > 0) {
    this.data = [...this.data, ...newData];
  }
  this.isLoading = false;
  this.loading = false; // 👉 hide skeletons
}

  toggleAllSelection() {
    this.selectedItems = this.isAllSelected() ? [] : [...this.data];
  }

  isAllSelected(): boolean {
    return this.data.length > 0 && this.selectedItems.length === this.data.length;
  }

  onButtonClick(action: string | undefined, item: any) {
    this.action.emit({ type: action, row: item });
  }

  onRowToggle(row: any) {
    const id = row.id;
    if (!this.expandedRows[id]) {
      this.expandedRows[id] = true;
      this.loadExpandedData.emit(row);
    } else {
      delete this.expandedRows[id];
    }
  }

  setExpandedData(id: string, data: any[]) {
    this.expandedData[id] = data;
    console.log('Expanded data set for ID:', id, 'Data:', data);
  }
  
}