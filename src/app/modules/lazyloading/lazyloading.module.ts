import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { HeaderComponent } from 'src/app/components/crud/header/header.component';
import { FooterComponent } from 'src/app/components/crud/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
