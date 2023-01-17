import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

const routes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    RouterModule.forChild(routes)
  ],exports: [
    RouterModule
  ]
})
export class MainModule { }
