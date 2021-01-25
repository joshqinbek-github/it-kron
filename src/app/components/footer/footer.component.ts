import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IntouchComponent } from '../intouch/intouch.component';
// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @ViewChild("footer", {static: true}) footer: ElementRef;

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
