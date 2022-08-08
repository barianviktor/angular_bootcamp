import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;
  @HostListener("mouseenter") mouseover(eventData: Event) {
    /* this.render.setStyle(this.elRef.nativeElement, "backgroundColor", "blue"); */
    this.backgroundColor = this.highlightColor;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    /* this.render.setStyle(
      this.elRef.nativeElement,
      "backgroundColor",
      "transparent"
    ); */
    this.backgroundColor = this.defaultColor;
  }
  constructor(private elRef: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;

    /* this.render.setStyle(this.elRef.nativeElement, "color", "blue"); */
  }
}
