import { Component, OnInit } from "@angular/core";
import { HelloService } from "../services/hello/hello.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    try {
      this.helloService.hello();
    } catch (err) {
      console.log(err);
    }
  }
}
