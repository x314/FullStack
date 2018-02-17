
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { myComponent } from "app/myComponent";

@NgModule({
  declarations: [
    myComponent
  ], 
  imports: [
    BrowserModule
  ], 
  providers: [], 
  bootstrap: [
    myComponent
  ], 
  entryComponents: []
})

export class myModule {

}
