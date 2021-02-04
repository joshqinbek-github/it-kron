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
  @ViewChild("sect_5", {static: true}) sect_5: ElementRef<HTMLDivElement>;


  constructor() { }

  ngOnInit(): void {
    this.scrollAnim();
   
  }



  scrollAnim():void{
    gsap.to(this.sect_6.nativeElement.childNodes[0].childNodes, {      
      duration: 1,
      opacity: 1,
      stagger: .4,
    });
  
    gsap.from(this.sect_5.nativeElement.childNodes, {      
      duration: 1,
      opacity: 1,
      stagger: .4,
    });


    gsap.to(this.sect_6.nativeElement.childNodes[1].childNodes, {
      delay: 2.2,
      duration: 1,
      opacity: 1,
      stagger: .4,
    });
  }

}
