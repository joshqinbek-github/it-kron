import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {gsap} from "gsap";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild("burger", {static: true}) burgerBtn: ElementRef;
  @ViewChild("burgerContent", {static: true}) burgerContent: ElementRef;
  

  isBurgerClicked = false;

  constructor() { }

  ngOnInit(): void {
   
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
        display: "none",
        duration: 0
      });

    }
  }

}
