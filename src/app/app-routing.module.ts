import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ElementDetailsComponent } from './components/element-details/element-details.component';

const routes: Routes = [
  {path: 'home/:pokemon', component: CatalogComponent},
  {path: 'elementDetails/:name', component: ElementDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
