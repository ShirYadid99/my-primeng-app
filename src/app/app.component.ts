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


  data = [
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
    { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },   { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },   { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },
       { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },   { id: 12, name: 'ספרדית', created: new Date(2024, 6, 5) },
    { id: 13, name: 'תרגום ', created: new Date(2024, 7, 20) },

  ];

  expandedColumns: TableColumn[] = [
    { field: 'email', header: 'Email', type: 'string' },
    { field: 'address', header: 'Address', type: 'string' },
  ];

  expandedData: { [key: string]: any[] } = {};

  handleTableAction(event: { type: string | undefined; row: any }) {
    console.log(`Action: ${event.type}`, event.row);
    if (event.type === 'edit') {
      alert(`Editing: ${event.row.name}`);
    }
    if (event.type === 'delete') {
      alert(`Deleting: ${event.row.name}`);
    }
  }

  onLoad(numberPage:number) {
    console.log('Load next page:', numberPage);
    //this.searchOuery.pageNUmber= numberPage;
    //this.searchEvent();
    // Simulate loading data
    const newData = this.getMockServerData(numberPage);
    this.dataTable.appendData(newData);
  }

  loadExpandedRowData(row: any) {
  
    setTimeout(() => {

      const mockData = this.getMockServerData(row.id);    
      this.dataTable.setExpandedData(row.id, mockData);

    }, 1000);
  }

  // Mock server data - replace this with actual HTTP service call
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

  // For real server implementation, replace getMockServerData with:
  /*
  private fetchFromServer(rowId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`/api/expanded-data/${rowId}`);
  }
  
  loadExpandedRowData(row: any) {
    this.fetchFromServer(row.id).subscribe({
      next: (data) => {
        this.expandedData[row.id] = data;
        this.dataTable.setExpandedData(row.id, data);
      },
      error: (error) => {
        console.error('Error loading expanded data:', error);
        this.dataTable.setLoadingError(row.id);
      }
    });
  }
  */
}