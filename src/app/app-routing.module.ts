import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home1', pathMatch: 'full' },
  { path: 'home1', loadChildren: () => import('./home1/home1.module').then(m => m.Home1Module) }, 
  { path: 'home2', loadChildren: () => import('./home2/home2.module').then(m => m.Home2Module) }, 
  { path: 'home3', loadChildren: () => import('./home3/home3.module').then(m => m.Home3Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
