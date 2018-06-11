import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { SettingsService } from "../../services/settings.service";
import { Settings } from "../../models/Settings";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private ss: SettingsService
  ) {}

  ngOnInit() {
    this.settings = this.ss.getSettings();
  }

  onSubmit() {
    this.ss.changeSettings(this.settings);
    this.flashMessage.show("Seetings saved!", {
      cssClass: "alert-success",
      timeout: 4000
    });
  }
}
