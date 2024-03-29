import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'homepage', component:HomepageComponent },
  {path: 'form', component:FormComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
