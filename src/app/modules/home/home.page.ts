import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  reloadComp: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ionViewWillEnter() {
    this.reloadComp.emit(true);
  }

}
