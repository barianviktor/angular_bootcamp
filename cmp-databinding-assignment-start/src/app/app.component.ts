import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(lastNumber) {
    console.log(lastNumber);
    if (lastNumber % 2 == 0) this.evenNumbers.push(lastNumber);
    if (lastNumber % 2 == 1) this.oddNumbers.push(lastNumber);
    console.log(this.oddNumbers, this.evenNumbers);
  }
}
