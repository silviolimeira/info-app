import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HelloService {
  hello() {
    throw new Error("Method not implemented.");
  }

  constructor() {
    console.log("HelloService ready!");
  }
}
