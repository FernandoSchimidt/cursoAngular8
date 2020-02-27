import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/crud/footer/footer.component';
import { HeaderComponent } from 'src/app/components/crud/header/header.component';
import { HomelazyComponent } from 'src/app/components/crud/homelazy/homelazy.component';


const routes: Routes = [
  {
    path:'',
    component:HomelazyComponent,
    children:[
      {
        path:'header',
        component:HeaderComponent
      },
      {
        path:'footer',
        component:FooterComponent
      }
    ]
  }
];

@NgModule({
  declarations:[FooterComponent, HeaderComponent,HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
