import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../column";
import {Task} from "../task";
import {KanbanService} from "../kanban.service";

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

  ngOnInit(): void {
  }

}
