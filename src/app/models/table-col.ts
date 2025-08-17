
export interface TableColumn {
  field: string;
  header: string;
  type?: 'text' | 'checkbox' | 'button' | 'date' | 'string'|'number';
  buttonLabel?: string;
  buttonClass?: string;
  buttonAction?: string;
  width?: string;
  sortable?: boolean;
}