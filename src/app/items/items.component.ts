import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemDataService } from '../services/item-data.service';
import { Item } from '../shared/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  private items: Item[] = [];
  private itemForm = this.formBuilder.group({
    name: ['', Validators.required],
    color: ['', [Validators.required]],
    desc: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
  });

  constructor(private itemService: ItemDataService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getAllItmes();
  }

  onSubmit() {
    if (this.itemForm.dirty && this.itemForm.valid) {
      this.itemService.addItem(this.itemForm.value);
      this.itemForm.reset();
      this.getAllItmes();
    }
  }

  getAllItmes() {
    this.items = this.itemService.getItems();
  }
}
