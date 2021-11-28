import { TableColumn } from '@swimlane/ngx-datatable';

export interface DataTable {
  columns: TableColumn[];
  rows: any[];
}
