import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [{ type: "server", name: "test", content: "content" }];
  onServerAdd(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdd(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = "canged";
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
