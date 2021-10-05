import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ColorPickerModule } from 'ngx-color-picker';
// import { CalendarModule as AngularCalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';

import { CalendarService } from 'app/main/apps/calendar/calendar.service';
import { TopCategoryComponent } from './top-category/top-category.component';

const routes: Routes = [
    {
        path: '**',
        component: TopCategoryComponent
    }
];

@NgModule({
    declarations: [
        TopCategoryComponent,
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatTooltipModule,

        MatDividerModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        NgxChartsModule,
        FuseSidebarModule,
        FuseWidgetModule,

        ColorPickerModule,

        FuseSharedModule,
        FuseConfirmDialogModule
    ],

})
export class ProjectModule {
}
