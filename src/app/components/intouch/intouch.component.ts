import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-intouch',
  templateUrl: './intouch.component.html',
  styleUrls: ['./intouch.component.css']
})
export class IntouchComponent implements OnInit {

  @ViewChild("intouch", {static: true}) intouch: ElementRef<HTMLDivElement>;


  constructor() { }

  ngOnInit(): void {
    gsap.from(this.intouch.nativeElement,{
      opacity: 0,
      y: "200px",
      delay: .4,
      duration: 1.2
    });
  }

}
