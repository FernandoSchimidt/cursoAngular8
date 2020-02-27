import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfNgforComponent } from './ng-if-ngfor/ng-if-ngfor.component';
import { CrudComponent } from './components/crud/crud.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgIfNgforComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
