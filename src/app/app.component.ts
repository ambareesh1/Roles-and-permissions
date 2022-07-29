import { Component, VERSION } from '@angular/core';
import { PermissionManagerService } from '../manager/permission-manager.service';
import { PermissionType } from '../manager/permission-type';
import { SuperAdminPermission } from '../manager/permissions/superadmin.permission';
import { Role } from '../manager/role';
import { Pages, RolesAndPermissions } from './Pages.Model';
import { RolesService } from './roles.service';
import { RolesEnum } from './RolesEnum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  pagesToview: Pages[];

  rolesAndPermissions: RolesAndPermissions;

  constructor(
    rolesService: RolesService,
    private permissionService: PermissionManagerService
  ) {
    //this.pagesToview = rolesService.getRolesAndPermisions(RolesEnum.SuperAdmin);
    console.log(
      this.permissionService.isGranted(PermissionType.ACCESS, 'Dashboard')
    );
  }

  // third implementation
  provideRolesAccess(role: string): void {
    let map = new Map<string, boolean>();
    if (role) {
      if (role == 'orgadmin') {
        map.set('organizationsettings', true);
        map.set('organizationsettings', true);
        map.set('organizationsettings', true);
        map.set('organizationsettings', true);
        map.set('organizationsettings', true);
        map.set('organizationsettings', true);
      }
    }
    this.rolesAndPermissions.access = map;
  }

  providePermission(role: string, page: string) {
    if (role == 'permissions') {
      this.rolesAndPermissions.canUserEdit = true;
    }
  }
}
