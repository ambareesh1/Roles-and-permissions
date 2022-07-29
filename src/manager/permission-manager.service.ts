import { Injectable } from '@angular/core';
import { PermissionType } from './permission-type';
import { PermissionBase } from './permissions/base.permission';
import { PermissionsFactory } from './permissions/factory.permission';
import { Role } from './role';

@Injectable()
export class PermissionManagerService {
  permissions: PermissionBase;

  constructor() {}

  isGranted(permission: PermissionType, page: string) {
    // get roles from user.service
    let mutipleRoles = [Role.OrgAdmin, Role.Physician];
    let singleRole = Role.OrgAdmin;
    // filter the roles and rank it
    if (permission == PermissionType.ACCESS) {
      mutipleRoles.forEach((element) => {
        let permissionValidate = this.isValidParmissions(
          permission,
          element,
          page
        );
        if (permissionValidate) {
          return true;
        }
      });
    } else {
      return this.isValidParmissions(permission, singleRole, page);
    }
  }

  authAs(role: Role, page: string) {
    localStorage.setItem('role', role === null ? Role.UnKnown : role);
    this.permissions = PermissionsFactory.getInstance(role, page);
  }

  isValidParmissions(permission: PermissionType, role: Role, page: string) {
    const permissions = PermissionsFactory.getInstance(role, page).permissions;
    for (let perm of permissions) {
      if (perm === permission) {
        return true;
      }
    }
    return false;
  }
}
