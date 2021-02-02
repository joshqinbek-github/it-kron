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
    this.scrollAnim();
   
  }



  scrollAnim():void{
    gsap.to(this.sect_6.nativeElement.childNodes[0].childNodes, {
      scrollTrigger: {
        trigger: this.sect_6.nativeElement, 
        scrub: false,
        markers: false,
        start: "-800px top",
        once: true,
        pin: false,
      },
      duration: 1,
      opacity: 1,
      stagger: .5,
    });
  



    gsap.to(this.sect_6.nativeElement.childNodes[1].childNodes, {
      scrollTrigger: {
        trigger: this.sect_6.nativeElement, 
        markers: false,
        start: "-800px top",
        once: true,
        pin: false,
      },
      duration: 2.5,
      opacity: 1,
      stagger: .4,
    });
  }

}
