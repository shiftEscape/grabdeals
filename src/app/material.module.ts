import { NgModule } from "@angular/core";
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule, MdIconModule, MdMenuModule } from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule, MdIconModule, MdMenuModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdInputModule, MdIconModule, MdMenuModule],
})
export class CustomMaterialModule { }