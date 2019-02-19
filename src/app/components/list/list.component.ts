import { Component, OnInit } from "@angular/core";
import { Item } from "../../../model/item";
import { CrudService } from "../../services/crud.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  items: Item[];
  selectedItem: Item;

  constructor(private service: CrudService) {}

  ngOnInit() {
    this.reads();
  }

  reads() {
    this.service.reads().subscribe(items => (this.items = items));
  }

  delete(item: Item) {
    this.service.delete(item.id);
  }

  edit(item: Item) {
    this.selectedItem = item;
  }
}
