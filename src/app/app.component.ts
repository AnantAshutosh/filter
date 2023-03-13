import { Component } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FilterComponent } from './Components/filter/filter.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-unified-portal';

  constructor(private dialogRef:MatDialog){}

  
  openDialog(): void {
    this.dialogRef.open(FilterComponent, {
      width: '25%',
    });
  }
  
}
