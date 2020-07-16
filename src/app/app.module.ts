import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagePublisherComponent } from './message-publisher/message-publisher.component';
import { MessageReceiverComponent } from './message-receiver/message-receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagePublisherComponent,
    MessageReceiverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
