import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { CrudService } from "../../services/crud.service";
import { Item } from "../../../model/item";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit, OnChanges {
  @Input() item: Item;

  name = new FormControl("");
  pass = new FormControl("");

  constructor(private service: CrudService) {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.item);
    if (this.item) {
      const { name, pass } = this.item;
      this.name.setValue(name);
      this.pass.setValue(pass);
    }
  }

  edit() {
    this.service.update({
      id: this.item.id,
      name: this.name.value,
      pass: this.pass.value
    });
    this.name.setValue("");
    this.pass.setValue("");
    this.item = undefined;
  }
}
