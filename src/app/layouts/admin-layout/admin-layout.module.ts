import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { EapMaintenanceComponent } from 'app/eap/view/eap-maintenance/eap-maintenance.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { BooleanToStringPipe } from 'app/eap/pipes/boolean-to-string.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';

import { EapNewComponent } from 'app/eap/view/eap-new/eap-new.component';
import { EapDetailComponent } from 'app/eap/view/eap-detail/eap-detail.component';
import { CoursesDetailComponent } from 'app/eap/view/courses-detail/courses-detail.component';
import { CourseNewComponent } from 'app/eap/view/course-new/course-new.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatStepperModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    EapMaintenanceComponent,
    EapDetailComponent,
    EapNewComponent,
    BooleanToStringPipe,
    CoursesDetailComponent,
    CourseNewComponent
  ], 
  entryComponents: [
    CoursesDetailComponent,
    CourseNewComponent
  ]
})

export class AdminLayoutModule {}
