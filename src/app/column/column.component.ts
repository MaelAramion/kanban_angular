import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../column";
import {Task} from "../task";
import {KanbanService} from "../kanban.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditDialogComponent} from "../edit-dialog/edit-dialog.component";
import {SeeDialogComponent} from "../see-dialog/see-dialog.component";


export interface DialogData {
  type: string;
  name: string;
  desc: string;
  class: string;
}

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  constructor(private kanbanService: KanbanService, public dialog: MatDialog) {
  }

  @Input() column: Column = new Column(0, "");

  tasks: Task[] = [new Task(999, "Tâche 1", "")];
  id: number = 0;
  task: Task = new Task(this.id, "", "");
  DialogOpen : boolean = false;

  columns: Column[] = this.kanbanService.getColumns();

  addTask(): void {
    this.tasks.push(this.task);
    this.id++
    this.task = new Task(this.id, "", "");
  }

  deleteColumn(id: number): void {
    this.kanbanService.deleteColumn(id);
  }

  deleteTask(id: number): void {
    let key = this.getTaskkey(id);
    if (key != -1) {
      this.tasks.splice(key, 1);
    }
  }

  getTaskkey(id: number): number {
    let taskKey = -1
    this.tasks.forEach((task, key) => {
      if (task.id == id) {
        taskKey = key;
      }
    });
    return taskKey;
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  openDialogTask(id: number): void {

    if(!this.DialogOpen){
      this.DialogOpen = true;
      let task : Task = this.tasks[this.getTaskkey(id)]

      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '270px',
        data: {name: task.name, type: "tâche", desc: task.desc, class: task.class},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if(result != null){
          task.name = result.name;
          task.desc = result.desc;
          task.class = result.class;
        }

        this.DialogOpen = false;
      });
    }
  }

  openDialogColumn(id: number): void {

    if(!this.DialogOpen){
      this.DialogOpen = true;
      let column : Column = this.kanbanService.columns[this.kanbanService.getColumnkey(id)]

      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '270px',
        data: {name: column.name, type: "colonne"},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
        if(result != null){
          column.name = result.name;
        }
        this.DialogOpen = false;
      });
    }
  }

  openDialogTaskConsult(id: number): void {

    if(!this.DialogOpen){
      this.DialogOpen = true;
      let task : Task = this.tasks[this.getTaskkey(id)]
      const dialogRef = this.dialog.open(SeeDialogComponent, {
        width: '270px',
        data: {name: task.name, desc: task.desc},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.DialogOpen = false;
      });
    }
  }


  ngOnInit(): void {
  }

}
