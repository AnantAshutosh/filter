import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(public dialogRef: MatDialogRef<FilterComponent>) {}


  cssClassByIndex(index:number) {
    return 'collapse'+index;
   }


  items: any[] = [
    {
      "title": "List",
      "id": "l1"
    },
    {
      "title": "Company",
      "id": "l2"
    },
    {
      "title": "Account HQ Location",
      "id": "l3"
    },
    {
      "title": "# Employees",
      "id": "l4"
    },
    {
      "title": "Industry",
      "id": "l5"
    },
    {
      "title": "Company Keywords",
      "id": "l6"
    },
    {
      "title": "Owner",
      "id": "l7"
    },
    {
      "title": "Stage",
      "id": "l8"
    }
  ];
}
