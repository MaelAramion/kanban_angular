import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../column/column.component";


interface Classes{
  value: string,
  viewValue : string
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent{

  classes : Classes[] = [
    {value: "white", viewValue: "Blanc"},
    {value: "red", viewValue: "Rouge"},
    {value: "blue", viewValue: "Bleu"},
    {value: "green", viewValue: "Vert"},
  ];

  constructor(
    public dialogRef : MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }


  onNoClick() : void {
    this.dialogRef.close();
  }

}
