import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toolbar } from './toolbar/toolbar';
import { Sidebar } from './sidebar/sidebar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    Toolbar,
    Sidebar
  ],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    Toolbar,
    Sidebar
  ]
})
export class LayoutModule { }
