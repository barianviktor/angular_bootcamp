import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentTab: string = 'recipe';
  onFeatureSelected(selectedFeature: string) {
    this.currentTab = selectedFeature;
  }
}
