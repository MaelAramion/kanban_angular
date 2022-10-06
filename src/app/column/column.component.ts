import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../column";
import {Task} from "../task";
import {KanbanService} from "../kanban.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  constructor(private kanbanService : KanbanService) { }

  @Input() column : Column = new Column(0,"");

  tasks : Task[] = [new Task(999,"Tâche 1","")];
  id : number = 0;
  task : Task = new Task(this.id, "","");


  columns : Column[]  = this.kanbanService.getColumns();

  addTask(){
    this.tasks.push(this.task);
    this.id++
    this.task = new Task(this.id,"","");
  }

  deleteColumn(id : number){
    this.kanbanService.deleteColumn(id);
  }

  deleteTask(id: number){
    this.tasks.forEach((task,key)=>{
      if(task.id == id){
        this.tasks.splice(key,1);
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

  }

  ngOnInit(): void {
  }

}
