import { environment } from './../environments/environment';
import { AppRoutingModule } from './app.route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule } from '@angular/forms';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { PayerComponent } from './components/payer/payer.component';
import { PayDetailComponent } from './components/pay-detail/pay-detail.component';
import { PayCardFormComponent } from './components/pay-card-form/pay-card-form.component';
import { PayTransferFormComponent } from './components/pay-transfer-form/pay-transfer-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessPayComponent } from './components/success-pay/success-pay.component';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SearcherComponent,
    ModalLoginComponent,
    FormLoginComponent,
    PayerComponent,
    PayDetailComponent,
    PayCardFormComponent,
    PayTransferFormComponent,
    SuccessPayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [environment.api_domain],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLoginComponent
  ]
})
export class AppModule { }
