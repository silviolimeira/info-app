import { Component, OnInit } from "@angular/core";
import { HelloService } from "../services/hello/hello.service";
import { InfoService } from "../services/info/info.service";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  infos: Observable<any[]>;

  constructor(
    private helloService: HelloService,
    private infoService: InfoService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    this.infos = this.db.list("/infos/-LhAkCZR7_6XwHGQSVmZ").valueChanges();

    try {
      this.helloService.hello();
    } catch (err) {
      console.log(err);
    }
  }
}
