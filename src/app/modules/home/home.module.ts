import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TrackerListComponent } from './components/tracker-list/tracker-list.component';
import { TrackerViewComponent } from './components/tracker-view/tracker-view.component';
import { TrackerAddEditComponent } from './components/tracker-add-edit/tracker-add-edit.component';


import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
  ],
  declarations: [
    HomePage,
    TrackerListComponent,
    TrackerViewComponent,
    TrackerAddEditComponent
  ]
})
export class HomePageModule { }
