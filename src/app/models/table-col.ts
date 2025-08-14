export interface TableColumn {
  field: string;
  header: string;
  type?: 'text' | 'checkbox' | 'button'| 'date'| 'string';
  buttonLabel?: string;
  buttonClass?: string;
  buttonAction?:string
}