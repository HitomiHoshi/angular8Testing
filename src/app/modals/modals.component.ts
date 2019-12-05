import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData{
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})

export class ModalsComponent {

  animal: string;
  name: string;

  constructor(
    public dialog:MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ModalsDialog, {
      width:'250px',
      data:{
        name: this.name,
        animal: this.animal,
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.animal = result;
    })
  }

}

@Component({
  selector: 'ModalsDialog',
  templateUrl: 'modals-dialog.html',
})

export class ModalsDialog{
  constructor(
    public dialogRef: MatDialogRef<ModalsDialog>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData,
  )
  {}

  onNoClick(): void{
    this.dialogRef.close();
  }
}
