import {Component} from '@angular/core';
import {Column} from "./column";
import { KanbanService } from './kanban.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban';

  constructor(private kanbanService : KanbanService) {
    this.init();
  }

  id = 0;
  column: Column = new Column(this.id,"");

  columns: Column[] = this.kanbanService.getColumns();

  init(){
    this.kanbanService.addColumn(new Column(999,"Backlog"));
  }



  addColumn() {
    this.id++
    this.kanbanService.addColumn(this.column);
    this.column = new Column(this.id,"");
  };

}
