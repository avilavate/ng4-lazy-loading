import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from "./user.component";
import { lazyRouting } from "./user-router";

@NgModule({
  imports: [
    CommonModule,
    lazyRouting
  ],
  declarations: [
    UserComponent
  ],
  exports: [UserComponent]
})
export default class UserModule { }
