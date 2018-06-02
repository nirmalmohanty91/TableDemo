import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CreateTableComponent } from './create-table/create-table.component';
import { TabledetailsComponent } from './tabledetails/tabledetails.component';
import { CreateTemplateComponent } from './create-template/create-template.component';



export const routes: Routes = [

    { path: '', redirectTo: 'createScreen', pathMatch: 'full' },
    { path: 'createScreen', component: TabledetailsComponent}, 
    { path: 'createTable', component: CreateTableComponent },
    { path: 'createTemplate', component: CreateTemplateComponent}

];