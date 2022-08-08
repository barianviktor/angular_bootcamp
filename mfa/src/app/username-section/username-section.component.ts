import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-section',
  templateUrl: './username-section.component.html',
  styleUrls: ['./username-section.component.css'],
})
export class UsernameSectionComponent implements OnInit {
  username = '';

  constructor() {}

  ngOnInit(): void {}
}
