import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInput1 = "";

 userInput2 = "";

 userInput3 = "";

 onInputReceiverName(vada1: Event) {

  this.userInput1 = (vada1.target as HTMLInputElement).value

  console.log(this.userInput1)

 }

 onInputPaymentDate(vada2: Event) {

  this.userInput2 = (vada2.target as HTMLInputElement).value

  console.log(this.userInput2)

 }

 onInputAmount(vada3: Event) {

  this.userInput3 = (vada3.target as HTMLInputElement).value

  console.log(this.userInput3)

 
  }
}
