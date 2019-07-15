import { DatabaseConnectionModel } from './../../../api/generated/defs/DatabaseConnectionModel';
import { ConnectionService } from './../../services/connection.service';
import { DatabaseService } from './../../../api/generated/controllers/Database';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-database-connection',
  templateUrl: './database-connection.component.html',
  styleUrls: ['./database-connection.component.css'],
})
export class DatabaseConnectionComponent implements OnInit {
  public connectionModel: DatabaseConnectionModel;

  constructor(
    private databaseService: DatabaseService,
    private connectionService: ConnectionService
  ) {}

  ngOnInit() {
    this.connectionModel = {};

    this.databaseService.default().subscribe(data => {
      this.connectionModel = data;
    });
  }

  onValidConnection() {
    this.databaseService
      .valid({ model: this.connectionModel })
      .subscribe(data => {
        this.connectionService.save(this.connectionModel);
      });
  }
}
