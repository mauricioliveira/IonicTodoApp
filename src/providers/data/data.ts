import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {

  }

  getData() {
    return this.storage.get('todos');
  }

  saveData(data: any) {
    this.storage.set('todos',data);
  }

}
