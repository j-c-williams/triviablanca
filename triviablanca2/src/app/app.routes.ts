import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { YubaComponent } from './yuba/yuba.component';
import { JanComponent } from './jan/jan.component';
import { Rot17Component } from './rot17/rot17.component';
import { ContraHumanidadComponent } from './contra-humanidad/contra-humanidad.component';
import { OnefortyandsixComponent } from './onefortyandsix/onefortyandsix.component';
import { EnciamComponent } from './enciam/enciam.component';
import { JackComponent } from './jack/jack.component';
import { CobbComponent } from './cobb/cobb.component';
import { ZeroOneZeroComponent } from './zero-one-zero/zero-one-zero.component';
import { CameraComponent } from './camera/camera.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'yuba', component: YubaComponent },
  { path: 'jan', component: JanComponent },
  { path: '140.6', component: OnefortyandsixComponent },
  { path: 'rot17', component: Rot17Component },
  { path: 'contrahumanidad', component: ContraHumanidadComponent },
  { path: 'enciam', component: EnciamComponent },
  { path: 'jack', component: JackComponent },
  { path: 'cobb', component: CobbComponent },
  { path: '010', component: ZeroOneZeroComponent },
  { path: 'camera', component: CameraComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
