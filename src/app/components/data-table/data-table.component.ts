import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TableColumn } from '../../models/table-col';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import e from 'express';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TableModule, CheckboxModule, ButtonModule, FormsModule, CalendarModule, TooltipModule, SkeletonModule],
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  @Input() expandedColumns: TableColumn[] = [];
  @Input() expandedData: { [key: string]: any[] } = {};

  @Output() loadExpandedData = new EventEmitter<any>();
  @Output() action = new EventEmitter<{ type: string | undefined, row: any }>();
  @Output() loadNext = new EventEmitter< number>();

  constructor(private cd: ChangeDetectorRef) {}




  selectedItems: any[] = [];
  expandedRows: any = {};
  expandedLoading: { [key: number]: boolean } = {};

  loadingMore: boolean = false;
  currentPage: number = 0;
  allLoaded: boolean = false;
  lastFirst = 0; // keeps track of the previous scroll position
  loadedRows = 0;
  pageSize = 20;

  appendData(newData: any[]) {
    if (!newData || newData.length === 0) {
      this.allLoaded = true;
      this.loadingMore = false;
      this.cd.detectChanges(); // Check for updates even on empty data
      return;
    }

    this.loadingMore = true;

    if (this.data.length === 0) {
      this.data = newData;
    } else {
      newData.forEach(item => this.data.push(item));
    }

    this.loadedRows = this.data.length;

    if (newData.length < this.pageSize) {
      this.allLoaded = true;
    }

    this.loadingMore = false;
    this.cd.detectChanges(); // This is the key line. Force a UI update here.
  }

  setExpandedData(rowId: number, newData: any[]) {
    this.expandedData[rowId] = newData;
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
      this.expandedLoading[id] = true;
      this.loadExpandedData.emit(row);
    } else {
      delete this.expandedRows[id];
      delete this.expandedLoading[id];
    }
  }




  onScroll(event: any) {
    const bufferEnd = event.first + event.rows;

    // Only load if scrolling down and we haven’t loaded all data
    if (!this.loadingMore&&!this.allLoaded && event.first > this.lastFirst && this.loadedRows <100000) {
      const nextPage = Math.floor(this.loadedRows / this.pageSize);
      this.loadingMore = true;
      this.loadNext.emit(nextPage);
    }

    this.lastFirst = event.first;
  }



  }

