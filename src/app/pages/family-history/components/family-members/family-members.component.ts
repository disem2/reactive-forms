import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {

  value: string;

  constructor(
    public dialogRef: MatDialogRef<FamilyMembersComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log(data);
    this.value = data.value;
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close();
  }

}
