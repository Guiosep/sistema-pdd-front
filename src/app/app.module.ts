import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLoginComponent } from './login/view/user-login/user-login.component';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginFakeBackendInterceptor } from './login/interceptor/login-fake-backend.interceptor';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
// import { CourseNewComponent } from './eap/view/course-new/course-new.component';
// import { CoursesDetailComponent } from './eap/view/courses-detail/courses-detail.component';
// import { BooleanToStringPipe } from './eap/pipes/boolean-to-string.pipe';
// import { EapNewComponent } from './eap/view/eap-new/eap-new.component';
// import { EapDetailComponent } from './eap/views/eap-detail/eap-detail.component';
// import { EapMaintenanceComponent } from './eap/eap-maintenance/eap-maintenance.component';

import { CoreService } from './core.service'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLoginComponent,
    // CourseNewComponent,
    // CoursesDetailComponent,
    // BooleanToStringPipe,
    // EapNewComponent,
    // EapDetailComponent,
    // EapMaintenanceComponent,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginFakeBackendInterceptor, multi: true },
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
