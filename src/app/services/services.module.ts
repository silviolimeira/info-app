import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "../components/hello/hello.component";
import { HelloService } from "./hello/hello.service";
import { InfoService } from "./info/info.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HelloService, InfoService]
})
export class ServicesModule {}
