import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  show: boolean = false;
  items: Date[] = [];
  constructor() {}
  onClikShow(): void {
    this.items.push(new Date());
    this.show = !this.show;
  }
  ngOnInit(): void {}
}
