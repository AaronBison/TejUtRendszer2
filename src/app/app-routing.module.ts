import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryComponent } from './delivery/delivery.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/delivery', pathMatch: 'full' },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', redirectTo: '/delivery' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
