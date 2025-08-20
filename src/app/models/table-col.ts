
export interface ColumnDefinition {
  field: string;
  header: string;
  type?: 'text' | 'checkbox' | 'button' | 'date' | 'string'|'number';
  buttonText?: string;
  buttonClass?: string;
  buttonAction?: string;
  showIf?: (row: any) => boolean;
  width?: string;
  sortable?: boolean;
}