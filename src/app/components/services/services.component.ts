import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  @ViewChild("sect_6", {static: true}) sect_6: ElementRef<HTMLDivElement>;


  constructor() { }

  ngOnInit(): void {
    // this.scrollAnim();
    for(let i; i <= this.sect_6.nativeElement.childNodes.length; i++){
      console.log(i)
    }
  }



  scrollAnim():void{
    gsap.from(this.sect_6.nativeElement.childNodes[1], {
      scrollTrigger: {
        trigger: this.sect_6.nativeElement,
        scrub: true,
        markers: false,
        start: "300px top",
      },
      duration: 1.5,
      y: -250,
      stagger: .4,
    });
  }
}
