import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "./hello/hello.component";

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HelloComponent]
})
export class ComponentsModule {}
