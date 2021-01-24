import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IntouchComponent } from '../intouch/intouch.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(IntouchComponent, {
      width: '100%'
  });
    dialogRef.afterClosed().subscribe(result => {
    dialogRef = null;
  });
  }

  ngOnInit(): void {
  }

}
