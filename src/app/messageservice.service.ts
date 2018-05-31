import { Injectable } from '@angular/core';

@Injectable()
export class MessageserviceService {

  constructor() { }

  messages : string []= []; 

addMessage (message : string) {
  this.messages.push(message);
}

clearMessages() {
  this.messages = [];
}

}
