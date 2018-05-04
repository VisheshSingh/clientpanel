import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  clients: Client[];

  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.cs.getClients().subscribe(clients => console.log(clients));
  }
}
