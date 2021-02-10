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
  @ViewChild("sect_4", {static: true}) sect_4: ElementRef<HTMLDivElement>;
  @ViewChild("sect_3", {static: true}) sect_3: ElementRef<HTMLDivElement>;
  @ViewChild("sect_2", {static: true}) sect_2: ElementRef<HTMLDivElement>;
  @ViewChild("sect_1", {static: true}) sect_1: ElementRef<HTMLDivElement>;


  constructor() {
    
  }
  
  ngOnInit(): void {
    this.scrollAnim();
    
    window.addEventListener("scroll", ()=>{
        this.animBottom();
    })
   
  }



  scrollAnim():void{
   
  
    gsap.from(this.sect_5.nativeElement.childNodes, {      
      duration: 1.5,
      opacity: 0,
      y: 150,
      stagger: .4,
    });

      gsap.from(this.sect_4.nativeElement.childNodes, {      
      duration: 1.5,
      opacity: 0,
      y: 150,
      stagger: .4,
    });

    gsap.from(this.sect_3.nativeElement.childNodes, {      
      duration: 1.5,
      opacity: 0,
      y: 250,
      stagger: .4,
    });
    gsap.from(this.sect_2.nativeElement.childNodes, {      
      duration: 1.5,
      opacity: 0,
      y: 250,
      stagger: .4,
    });
    gsap.from(this.sect_1.nativeElement.childNodes, {      
      duration: 1.5,
      opacity: 0,
      y: 250,
      stagger: .4,
    });
   
  }


  animBottom(){

   if(window.pageYOffset >= 2386){
     console.log("done")
    gsap.to(this.sect_6.nativeElement.childNodes[1].childNodes, {
      delay: 2,
      duration: 1,
      opacity: 1,
      stagger: .4,
    });

    gsap.to(this.sect_6.nativeElement.childNodes[0].childNodes, {      
      duration: 1,
      opacity: 1,
      stagger: .4,
    });
    }
   }
}
