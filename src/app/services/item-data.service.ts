import { Injectable } from '@angular/core';
import { Item } from '../shared/interfaces';

@Injectable()
export class ItemDataService {
  private items: Item[] = [];
  private id = 1;

  addItem(item: Item) {
    item.date = new Date();
    item.id = this.id;
    this.items.push(item);
    this.id++;
  }

  getItems() {
    return this.items;
  }

  getItem(id: number): Item | null {
    return this.items.find(item => item.id === id);
  }
}
