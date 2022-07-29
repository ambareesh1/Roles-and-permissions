import { PermissionType } from '../permission-type';
import { PermissionBase } from './base.permissions';

export class AdminPermission extends PermissionBase {
  constructor(role: Role, page: string) {
    super(role, page);

    switch (page) {
      case 'HD':
      case 'DataFlow':
      case 'OrganizationManagement':
      case 'CityManagement':
        this.permissions = [
          PermissionType.CREATE,
          PermissionType.READ,
          PermissionType.UPDATE,
          PermissionType.ACCESS,
        ];
        break;
      case 'FacilityManagement':
        this.permissions = [
          PermissionType.CREATE,
          PermissionType.READ,
          PermissionType.UPDATE,
          PermissionType.ACCESS,
        ];
    }

    this.permissions = [
      PermissionType.CREATE,
      PermissionType.READ,
      PermissionType.UPDATE,
      PermissionType.OTHER,
    ];
  }
}
