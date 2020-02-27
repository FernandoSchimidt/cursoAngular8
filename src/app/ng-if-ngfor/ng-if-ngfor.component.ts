import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-if-ngfor",
  templateUrl: "./ng-if-ngfor.component.html",
  styleUrls: ["./ng-if-ngfor.component.css"]
})
export class NgIfNgforComponent implements OnInit {
  numero: number;
  arrNumeros =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {}

  ngOnInit(): void {}
}
