import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(DataTableComponent) dataTable!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'select', header: '', type: 'checkbox', sortable: false },
    { field: 'name', header: 'מספר מסלקה ', type: 'string', sortable: true },
    { field: 'name', header: 'ח.פ יצרן', type: 'string', sortable: false },
    { field: 'name', header: ' קוד אירוע', type: 'number', sortable: false },
    { field: 'name', header: ' סטטוס', type: 'number', sortable: false },
    { field: 'created', header: 'תאריך יצירה ', type: 'date', sortable: true },
    { field: 'edit', header: ' שם קובץ', type: 'button', buttonAction: 'edit', buttonLabel: 'הצג', buttonClass: 'p-button-info', sortable: false },
    { field: 'name', header: 'הודעת שגיאה', type: 'string', sortable: false }, 
    { field: 'id', header: 'קוד שגיאה', type: 'number', sortable: true },
    { field: 'delete', header: '  קובץ תשובה', type: 'button', buttonAction: 'delete',buttonLabel:'הצג', buttonClass: 'p-button-danger', sortable: false },
  ];

  // Full dataset
  fullData = [
    { id: 1, name: ' בדיקה מסויימת בעברית כתב ארוך', created: new Date(2024, 5, 12) },
    { id: 2 , name: ' בדיקה מסויימת בעברית כתב ארוך', created: new Date(2024, 6, 5) },
    { id: 3, name: ' אי', created: new Date(2024, 7, 20) },
    { id: 4, name: 'אכ', created: new Date(2024, 5, 12) },
    { id: 5, name: 'שם  קובץ א', created: new Date(2024, 6, 5) },
    { id: 6, name: ' שם קובץ ב', created: new Date(2024, 7, 20) },   
    { id: 7, name: 'בדיקה', created: new Date(2024, 5, 12) },
    { id: 8, name: 'מספר מסלקה כלשהו', created: new Date(2024, 6, 5) },
    { id: 9, name: 'בדיקה נוספת', created: new Date(2024, 7, 20) },  
    { id: 10, name: 'עבכרית', created: new Date(2024, 5, 12) },
    { id: 11, name: 'קובץ 11', created: new Date(2024, 5, 12) },
    { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
    { id: 14, name: 'קובץ 14', created: new Date(2024, 5, 12) },
    { id: 15, name: 'קובץ 15', created: new Date(2024, 6, 5) },
    { id: 16, name: 'קובץ 16', created: new Date(2024, 7, 20) },
    { id: 17, name: 'קובץ 17', created: new Date(2024, 5, 12) },
    { id: 18, name: 'קובץ 18', created: new Date(2024, 6, 5) },
    { id: 19, name: 'קובץ 19', created: new Date(2024, 7, 20) },
    { id: 20, name: 'קובץ 20', created: new Date(2024, 5, 12) },
    { id: 21, name: 'קובץ 21', created: new Date(2024, 6, 5) },
    { id: 22, name: 'קובץ 22', created: new Date(2024, 7, 20) },
    { id: 23, name: 'קובץ 23', created: new Date(2024, 5, 12) },
    { id: 24, name: 'קובץ 24', created: new Date(2024, 6, 5) },
    { id: 25, name: 'קובץ 25', created: new Date(2024, 7, 20) },
    // Added 20 more
    { id: 26, name: 'קובץ 26', created: new Date(2024, 5, 15) },
    { id: 27, name: 'קובץ 27', created: new Date(2024, 6, 18) },
    { id: 28, name: 'קובץ 28', created: new Date(2024, 7, 22) },
    { id: 29, name: 'קובץ 29', created: new Date(2024, 5, 25) },
    { id: 30, name: 'קובץ 30', created: new Date(2024, 6, 28) },
    { id: 31, name: 'קובץ 31', created: new Date(2024, 7, 30) },
    { id: 32, name: 'קובץ 32', created: new Date(2024, 5, 5) },
    { id: 33, name: 'קובץ 33', created: new Date(2024, 6, 10) },
    { id: 34, name: 'קובץ 34', created: new Date(2024, 7, 12) },
    { id: 35, name: 'קובץ 35', created: new Date(2024, 5, 20) },
    { id: 36, name: 'קובץ 36', created: new Date(2024, 6, 23) },
    { id: 37, name: 'קובץ 37', created: new Date(2024, 7, 26) },
    { id: 38, name: 'קובץ 38', created: new Date(2024, 5, 30) },
    { id: 39, name: 'קובץ 39', created: new Date(2024, 6, 2) },
    { id: 40, name: 'קובץ 40', created: new Date(2024, 7, 8) },
    { id: 41, name: 'קובץ 41', created: new Date(2024, 5, 12) },
    { id: 42, name: 'קובץ 42', created: new Date(2024, 6, 15) },
    { id: 43, name: 'קובץ 43', created: new Date(2024, 7, 18) },
    { id: 44, name: 'קובץ 44', created: new Date(2024, 5, 21) },
    { id: 45, name: 'קובץ 45', created: new Date(2024, 6, 24) },
    { id: 46, name: 'קובץ 46', created: new Date(2024, 7, 27) },
    { id: 47, name: 'קובץ 47', created: new Date(2024, 5, 3) },
    { id: 48, name: 'קובץ 48', created: new Date(2024, 6, 6) },
    { id: 49, name: 'קובץ 49', created: new Date(2024, 7, 9) },
    { id: 50, name: 'קובץ 50', created: new Date(2024, 5, 11) },
    { id: 51, name: 'קובץ 50', created: new Date(2024, 5, 11) },
];


  data: any[] = [];
  pageSize: number = 20; // Number of items per page


  expandedColumns: TableColumn[] = [
    { field: 'email', header: 'Email', type: 'string' },
    { field: 'address', header: 'Address', type: 'string' },
  ];

  expandedData: { [key: string]: any[] } = {};


  ngAfterViewInit() {
    this.loadPage(0); 
  }

  handleTableAction(event: { type: string | undefined; row: any }) {
    console.log(`Action: ${event.type}`, event.row);
    if (event.type === 'edit') {
      alert(`Editing: ${event.row.name}`);
    }
    if (event.type === 'delete') {
      alert(`Deleting: ${event.row.name}`);
    }
  }

loadPage(pageNumber: number) {
  console.log(`Loading page- parent: ${pageNumber}`);
  const startIndex = pageNumber * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  const newData = this.fullData.slice(startIndex, endIndex);
  console.log(`Loading data from index ${startIndex} to ${endIndex}`);
  console.log('New data:\- parent', newData);

  if (newData.length === 0) return;

  setTimeout(() => {
    this.dataTable.appendData(newData); // safe: appendData handles loadingMore
    
  }, 1000);
}

  loadExpandedRowData(row: any) {
    setTimeout(() => {
      const mockData = this.getMockServerData(row.id);    
      this.dataTable.setExpandedData(row.id, mockData);
      this.dataTable.expandedLoading[row.id] = false;
    }, 1000);
  }

  private getMockServerData(rowId: number): any[] {
    const serverData = {
      1: [
        { email: 'john.doe@company.com', address: '123 Main St, New York' },
        { email: 'john.personal@gmail.com', address: '456 Home Ave, Brooklyn' },
      ],
      2: [
        { email: 'jane.smith@company.com', address: '789 Business Rd, Manhattan' },
        { email: 'jane.home@yahoo.com', address: '321 Residential St, Queens' },
        { email: 'jane.backup@hotmail.com', address: '654 Secondary Ave, Bronx' },
      ],
      3: [
        { email: 'file.c@company.com', address: '987 Corporate Blvd, Staten Island' },
      ]
    };

    return serverData[rowId as keyof typeof serverData] || [];
  }






}
