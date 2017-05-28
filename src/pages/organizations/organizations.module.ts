import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizationsPage } from './organizations';

@NgModule({
  declarations: [
    OrganizationsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizationsPage),
  ],
  exports: [
    OrganizationsPage
  ]
})
export class OrganizationsPageModule {}
