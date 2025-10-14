import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatFieldsPipe } from './pipes/concatFields/concat-fields-pipe';





@NgModule({
  declarations: [
    ConcatFieldsPipe,

  ],
  imports: [
    CommonModule
  ],
  exports: [ConcatFieldsPipe]
})
export class SharedModule { }
