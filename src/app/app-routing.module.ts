import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { NgIfNgforComponent } from "./ng-if-ngfor/ng-if-ngfor.component";

const routes: Routes = [
  {
    path:'teste',
    component: NgIfNgforComponent
  },
  {
    path: "lazy",
    loadChildren: () =>
      import("./modules/lazyloading/lazyloading.module").then(
        m => m.LazyloadingModule
      )
  },

  { path: "primeiro-componente", component: DataBindingComponent },
  { path: "segundo-componente", component: SegundoComponenteComponent },
  { path: "teste", component: NgIfNgforComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
