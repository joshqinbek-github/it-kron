import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {gsap} from "gsap";
import { IntouchComponent } from '../intouch/intouch.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild("burger", {static: true}) burgerBtn: ElementRef;
  @ViewChild("burgerContent", {static: true}) burgerContent: ElementRef;
  @ViewChild("navbar", {static: true}) nav: ElementRef;
  

  isBurgerClicked = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(IntouchComponent, {
      height: '90%',
      width: '100%'
  });
    dialogRef.afterClosed().subscribe(result => {
    dialogRef = null;
  });

   
  }

  ngOnInit(): void {
  
    this.initAnimNav();  
  }

  initAnimNav(){
    gsap.from(this.nav.nativeElement,{
      opacity: 0,
      duration: 1,
      y: "-100px"

    })

  }

  onBurger(){
    this.isBurgerClicked = !this.isBurgerClicked;

    if(this.isBurgerClicked){
      
      gsap.to(this.burgerContent.nativeElement,{
        display: "flex",
        opacity: 1

      });
      gsap.to(this.burgerContent.nativeElement.childNodes,{
        opacity: 1,
        duration: .5,
        stagger: .2

      })

    }else{
     
      gsap.to(this.burgerContent.nativeElement.childNodes,{
        opacity: 0,
        duration: .5,
        stagger: -.2
      });

      gsap.to(this.burgerContent.nativeElement,{
        opacity: 0,
        delay: 1,
        duration: .5
      });
      gsap.to(this.burgerContent.nativeElement,{
        delay: 1.5,
        display: "none",
        duration: 0
      });

    }
  }

}
