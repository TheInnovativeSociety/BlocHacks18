import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component/app.component';
import { BudgetFormComponent } from './component/form/budget-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, BudgetFormComponent]
})
export class AppModule { }
