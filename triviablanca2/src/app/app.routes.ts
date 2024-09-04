import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { YubaComponent } from './yuba/yuba.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'yuba', component: YubaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
