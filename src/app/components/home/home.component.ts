import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {gsap} from "gsap";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("intro", {static: true}) intro: ElementRef<HTMLHeadingElement>;
  @ViewChild("s1_content", {static: true}) s1_content: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {

    this.initAnim();
  }

  initAnim(){
    gsap.from(this.intro.nativeElement,{
      y: 500,
      duration: 1.5
    });

  

    gsap.from(this.s1_content.nativeElement,{
      opacity: 0,
      delay: .7,
      duration: 1.2
    });
    gsap.from(
      this.s1_content.nativeElement.childNodes[0],
      {
      x: -200,
      delay: .8,
      duration: .6
    });

    gsap.from(
      this.s1_content.nativeElement.childNodes[3],
      {
      x: 200,
      delay: .8,
      duration: .6
    });
  }

}
