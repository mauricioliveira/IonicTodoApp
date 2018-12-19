import { Component } from '@angular/core';
import { ModalController, NavController, Item } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {

    this.dataService.getData().then((todos) => {

      if (todos) {
        this.items = todos;
      }

    });

  }

  ionViewDidLoad() {

  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item: any) {
    this.items.push(item);
    this.dataService.saveData(this.items);
  }

  viewItemOptions(item: any) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
