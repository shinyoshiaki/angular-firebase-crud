import { Component, OnInit } from "@angular/core";
import { CrudService } from "../../services/crud.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  name = new FormControl("");
  pass = new FormControl("");
  constructor(private service: CrudService) {}

  ngOnInit() {}

  create() {
    this.service.create(this.name.value, this.pass.value);
    this.name.setValue("");
    this.pass.setValue("");
  }
}
