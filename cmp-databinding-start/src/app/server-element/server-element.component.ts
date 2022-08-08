import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  @ViewChild("heading", { static: true }) heading: ElementRef;
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  constructor() {
    console.log("constructor called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ng Changes called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngonit called");
    console.log(this.heading.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log(this.heading.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("destroyed");
  }
}
