import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileSettingsFormComponent } from './profile-settings-form/profile-settings-form.component';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
//import {MovieProviderService } from './movie-provider';
import {MovieProviderService} from "./movie-provider.service";
import { GridOfItemsComponent } from './grid-of-items/grid-of-items.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileSettingsFormComponent,
    GridOfItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MovieProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {




}
