import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styles: [
    `
      h3: {
        color: 'green';
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = 'test';
  serverCreated = false;
  servers: string[] = [];
  constructor() {
    for (let i = 0; i < 12; i++) {
      this.servers.push(`testServer ${i + 1}`);
    }
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }
  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'server was created, name is : ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  ngOnInit(): void {}
}
