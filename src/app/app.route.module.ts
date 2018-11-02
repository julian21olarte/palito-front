// import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AuthGuard } from './guards/auth.guard';
import { PayerComponent } from './components/payer/payer.component';
import { SuccessPayComponent } from './components/success-pay/success-pay.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearcherComponent, canActivate: [AuthGuard] },
  { path: 'payer', component: PayerComponent, canActivate: [AuthGuard] },
  { path: 'success', component: SuccessPayComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
