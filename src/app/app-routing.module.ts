import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { ProfileSettingsFormComponent }   from './profile-settings-form/profile-settings-form.component';
import {GridOfItemsComponent } from './grid-of-items/grid-of-items.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'shop',  component: GridOfItemsComponent },
  { path: 'settings', component:  ProfileSettingsFormComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
