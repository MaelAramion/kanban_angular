import {Injectable} from '@angular/core';
import {Column} from "./column";


@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  columns: Column[] = [];

  addColumn(column: Column) {
    this.columns.push(column);
  }

  getColumns() {
    return this.columns;
  }

  deleteColumn(id: number) {
    this.columns.forEach((column, key) => {
      if (column.id == id) {
        this.columns.splice(key,1);
      }
    });
  }

  constructor() {
  }
}
