import { DatabaseConnectionModel } from './../../../api/generated/defs/DatabaseConnectionModel';
import { ConnectionService } from './../../services/connection.service';
import { DatabaseService } from './../../../api/generated/controllers/Database';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-database-connection',
  templateUrl: './database-connection.component.html',
  styleUrls: ['./database-connection.component.css'],
})
export class DatabaseConnectionComponent implements OnInit {
  public connection: DatabaseConnectionModel;

  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private connectionService: ConnectionService
  ) {}

  ngOnInit() {
    this.connection = { server: '' };

    this.databaseService.default().subscribe(data => {
      this.connection = data;

      console.log(data);
      console.log(this);
    });
  }

  onValidConnection() {
    this.databaseService.valid({ model: this.connection }).subscribe(data => {
      if (data) {
        this.connectionService.save(this.connection);
        this.router.navigate(['database/database']);
      }
    });
  }
}
