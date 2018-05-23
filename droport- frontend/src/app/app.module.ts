import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './view/login/login.component';
import { AdminMainPanelComponent } from './view/admin/admin-main-panel/admin-main-panel.component';
import { AdminReqViewComponent } from './view/admin/admin-req-view/admin-req-view.component';
import { AdminRegPilotsComponent } from './view/admin/admin-reg-pilots/admin-reg-pilots.component';
import { AdminRegPhiComponent } from './view/admin/admin-reg-phi/admin-reg-phi.component';
import { AdminRegOwnersComponent } from './view/admin/admin-reg-owners/admin-reg-owners.component';
import { AdminRegReqComponent } from './view/admin/admin-reg-req/admin-reg-req.component';
import { CusNewReqComponent } from './view/customer/cus-new-req/cus-new-req.component';
import { CusReqHistoryComponent } from './view/customer/cus-req-history/cus-req-history.component';
import { CusReqViewComponent } from './view/customer/cus-req-view/cus-req-view.component';
import { OwnMainPageComponent } from './view/owner/own-main-page/own-main-page.component';
import { PilMainPageComponent } from './view/pilot/pil-main-page/pil-main-page.component';
import { OwnRegComponent } from './view/owner/own-reg/own-reg.component';
import { SidebarPilotComponent } from './components/sidebar-pilot/sidebar-pilot.component';
<<<<<<< HEAD
import { PilReqDetailComponent } from './view/pilot/pil-req-detail/pil-req-detail.component';
import { PilFlyHistoryComponent } from './view/pilot/pil-fly-history/pil-fly-history.component';
=======
import { HomeComponent } from './view/landing/home/home.component';
import { AboutComponent } from './view/landing/about/about.component';
import { ServicesComponent } from './view/landing/services/services.component';
import { ContactusComponent } from './view/landing/contactus/contactus.component';
>>>>>>> 8f49e37cf3e0b1e0e89af4511840c1d13fe51b66


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin_main_panel', component: AdminMainPanelComponent },
  { path: 'admin_reg_owners', component: AdminRegOwnersComponent },
  { path: 'admin_reg_phi', component: AdminRegPhiComponent },
  { path: 'admin_reg_pilots', component: AdminRegPilotsComponent },
  { path: 'admin_req_view', component: AdminReqViewComponent },
  { path: 'admin_reg_req', component: AdminReqViewComponent },
  { path: 'cus_new_req', component: CusNewReqComponent },
  { path: 'cus_req_history', component: CusReqHistoryComponent },
  { path: 'cus_req_view', component: CusReqViewComponent },
  { path: 'pil_main_page', component: PilMainPageComponent },
  { path: 'own_main_page', component: OwnMainPageComponent },
  { path: 'own_reg', component:OwnRegComponent},
  { path: 'req_detail', component: PilReqDetailComponent},
  { path: 'pil_fly_history', component: PilFlyHistoryComponent}
 

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    AdminMainPanelComponent,
    AdminReqViewComponent,
    AdminRegPilotsComponent,
    AdminRegPhiComponent,
    AdminRegOwnersComponent,
    AdminRegReqComponent,
    CusNewReqComponent,
    CusReqHistoryComponent,
    CusReqViewComponent,
    OwnMainPageComponent,
    PilMainPageComponent,
    OwnRegComponent,
    SidebarPilotComponent,
<<<<<<< HEAD
    PilReqDetailComponent,
    PilFlyHistoryComponent,
=======
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent,

>>>>>>> 8f49e37cf3e0b1e0e89af4511840c1d13fe51b66
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }