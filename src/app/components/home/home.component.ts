import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import { OwlOptions } from 'ngx-owl-carousel-o';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
             './home.component.css',
             './sections.component.css'
            ]
})
export class HomeComponent implements OnInit {

  @ViewChild("intro", {static: true}) intro: ElementRef<HTMLHeadingElement>;
  @ViewChild("sect2", {static: true}) sect2: ElementRef<HTMLDivElement>;
  @ViewChild("sect3", {static: true}) sect3: ElementRef<HTMLDivElement>;
  
  @ViewChild("s1_content", {static: true}) s1_content: ElementRef<HTMLDivElement>;

  customOptions: any = {
    // loop: true,
    // autoplay:true,
    responsiveClass: true,
    // navText: ['Previous', 'Next'],
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 1
     },
      940: {
       items: 3
     }
    },
  //  nav: true
  }

  
 constructor(@Inject(DOCUMENT) private document: Document){}

  ngOnInit(): void {

    this.initAnim();
    this.scrollAnim();
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

    gsap.from(this.sect2.nativeElement.childNodes[1].childNodes, {
      delay: 1.3,
      duration: .8,
      opacity: 0,
      stagger: 0.4
    });

    gsap.from(this.sect2.nativeElement.childNodes[0], {
      delay: .5,
      opacity: 0,
      duration: .8
    });

      gsap.from(this.sect3.nativeElement.childNodes[1].childNodes, {
      delay: 1.5,
      duration: .8,
      opacity: 0,
      stagger: 0.4
    });

    gsap.from(this.sect3.nativeElement.childNodes[0], {
      delay: 1.3,
      opacity: 0,
      duration: .8
    });
  
  }

  scrollAnim():void{
    gsap.to(this.sect2.nativeElement.childNodes[1].childNodes, {
      scrollTrigger: {
        trigger: this.sect2.nativeElement,
        scrub: true,
        markers: false,
        start: "-150px top",
      },
      duration: 1.5,
      // y: -250,
      scale: 0,
      stagger: .4,
    });
  

  gsap.to(this.sect3.nativeElement, {
    scrollTrigger: {
      trigger: this.sect2.nativeElement,
      scrub: true,
      markers: false,
      start: "-150px top",
    },
    duration: 1.5,
    opacity: 1,
    scale: 1
    })

gsap.to(this.s1_content.nativeElement.childNodes, {
  scrollTrigger: {
    trigger: this.sect2.nativeElement,
    scrub: true,
    markers: false,
    start: "-200px top",
  },
  duration: 1.5,
  opacity: 0,
  scale: 0,
  stagger: .4
  })
}

}
