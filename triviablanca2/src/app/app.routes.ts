import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { YubaComponent } from './yuba/yuba.component';
import { JanComponent } from './jan/jan.component';
import { Rot17Component } from './rot17/rot17.component';
import { OnefortyandsixComponent } from './onefortyandsix/onefortyandsix.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'yuba', component: YubaComponent },
  { path: 'jan', component: JanComponent},
  { path: '140.6', component: OnefortyandsixComponent},
  { path: 'rot17', component: Rot17Component },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
