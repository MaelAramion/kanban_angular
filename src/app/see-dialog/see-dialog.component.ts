import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../column/column.component";

@Component({
  selector: 'app-see-dialog',
  templateUrl: './see-dialog.component.html',
  styleUrls: ['./see-dialog.component.scss']
})
export class SeeDialogComponent {

  constructor(
    public dialogRef : MatDialogRef<SeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public  data: DialogData
  ) { }

  onNoClick() : void {
    this.dialogRef.close();
  }


}
