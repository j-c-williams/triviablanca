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
import { BallComponent } from './ball/ball.component';
import { LoleinaComponent } from './loleina/loleina.component';
import { EstevaoComponent } from './estevao/estevao.component';
import { MascotComponent } from './mascot/mascot.component';
import { TxComponent } from './tx/tx.component';
import { AnagramComponent } from './anagram/anagram.component';
import { TheMakerComponent } from './the-maker/the-maker.component';
import { FarrierComponent } from './farrier/farrier.component';
import { CongratsComponent } from './congrats/congrats.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ZuckComponent } from './zuck/zuck.component';
import { AutoComponent } from './auto/auto.component';
import { BeaufortComponent } from './beaufort/beaufort.component';
import { ZiplineComponent } from './zipline/zipline.component';

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
  { path: 'ball', component: BallComponent },
  { path: 'loleina', component: LoleinaComponent },
  { path: 'estevao', component: EstevaoComponent },
  { path: 'mascot', component: MascotComponent },
  { path: 'tx', component: TxComponent },
  { path: '16_14_15_5_6_3_13_4_7_9_10_11_12_17_18_8_2_1', component: AnagramComponent },
  { path: 'themaker', component: TheMakerComponent },
  { path: 'farrier', component: FarrierComponent },
  { path: 'zuck', component: ZuckComponent },
  { path: 'zipline', component: ZiplineComponent },
  { path: 'auto', component: AutoComponent },
  { path: 'beaufort', component: BeaufortComponent },
  { path: 'auto/beaufort', component: BeaufortComponent },
  { path: 'victoriousatlast', component: CongratsComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
