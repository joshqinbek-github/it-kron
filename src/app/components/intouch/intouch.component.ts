import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
      ]),
      message: new FormControl(null)
    });

    gsap.from(this.intouch.nativeElement,{
      opacity: 0,
      y: "200px",
      delay: .4,
      duration: 1.2
    });
  }

  onSubmit(){
   if(!this.form.valid){
     return;
   }else{
    this.http.post("https://itkron-messages-default-rtdb.firebaseio.com/messages.json",
    this.form.value
    ).subscribe(res=> {})
    this.form.reset();
   }
  }
}
