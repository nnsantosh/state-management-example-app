import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-message-publisher',
  templateUrl: './message-publisher.component.html',
  styleUrls: ['./message-publisher.component.css']
})
export class MessagePublisherComponent implements OnInit {

  message:string;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  public updateMessage(event:any){
    this.message = event.target.value;
    this.dataService.changeCurrentMessage(this.message);
  }

}
