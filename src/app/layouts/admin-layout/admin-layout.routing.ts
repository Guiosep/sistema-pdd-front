import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { LaboratoryComponent } from '../../laboratory/laboratory.component';
import { MaterialComponent } from '../../material/material.component';
import { EapMaintenanceComponent } from 'app/eap/view/eap-maintenance/eap-maintenance.component';
import { EapDetailComponent } from 'app/eap/view/eap-detail/eap-detail.component';
import { EapNewComponent } from 'app/eap/view/eap-new/eap-new.component';
import { LaboratoryDetailComponent } from '../../laboratory/detail/detail.component';
import { MaterialDetailComponent } from '../../material/detail/detail.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'eap',            component: EapMaintenanceComponent },
    { path: 'eap-detail',     component: EapDetailComponent},
    { path: 'new', component: EapNewComponent },
    { path: 'edit', component: EapNewComponent },
    { path: 'laboratory',     component: LaboratoryComponent },
    { path: 'laboratory-detail',     component: LaboratoryDetailComponent },
    { path: 'material',       component: MaterialComponent },
    { path: 'material-detail',     component: MaterialDetailComponent },

];
