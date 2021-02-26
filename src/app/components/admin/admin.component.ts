import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  messages: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.getMsgs();
  }

  getMsgs(){
    this.http.get("https://itkron-messages-default-rtdb.firebaseio.com/messages.json").subscribe((res: any)=>{
    this.messages = [];
    for(let key in res){
        this.messages.push({id: key,...res[key]})
      };
    })
  }
  onDelete(id){
    console.log(id)
    this.http.delete("https://itkron-messages-default-rtdb.firebaseio.com/messages/"+id+".json")
    .subscribe(res=> {
      this.getMsgs();
    })
  }
}
