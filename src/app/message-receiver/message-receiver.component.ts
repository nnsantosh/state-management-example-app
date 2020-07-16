import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.css']
})
export class MessageReceiverComponent implements OnInit {

  message:string;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }


}
