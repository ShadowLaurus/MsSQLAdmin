import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatabaseConnectionModel } from 'src/api/generated/model';
import { CommunicatorService } from './communicator.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private currentConnectionSubject: BehaviorSubject<DatabaseConnectionModel> = new BehaviorSubject<DatabaseConnectionModel>(null);

  constructor(private com: CommunicatorService) {}

  public get currentConnectionValue(): DatabaseConnectionModel {
    return this.currentConnectionSubject.value;
  }

  save(connection: DatabaseConnectionModel) {
    this.currentConnectionSubject.next(connection);
  }
}
