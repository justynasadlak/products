import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemDataService } from './services/item-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { MatCheckboxModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, LoginComponent, RegisterComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule,

  ],
  providers: [ItemDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
