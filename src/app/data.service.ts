import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();


  public changeCurrentMessage(inputMessage:string){
    this.messageSource.next(inputMessage);
  }

  constructor() { }
}
