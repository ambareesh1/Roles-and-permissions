import { Pages } from './Pages.Model';
import { Roles } from './Roles.model';
import { RolesPermissions } from './RolesPermissions.Model';

export class RolesService {
  public getRolesAndPermisions = (roleId: number): Pages[] => {
    const roles: Roles[] = [
      { id: 1, name: 'Super Admin', isActive: true, lastUpdatedOn: new Date() },
      { id: 2, name: 'Org Admin', isActive: true, lastUpdatedOn: new Date() },
      {
        id: 3,
        name: 'Facility Admin',
        isActive: true,
        lastUpdatedOn: new Date(),
      },
      { id: 4, name: 'Pharmacist', isActive: true, lastUpdatedOn: new Date() },
      { id: 5, name: 'Physician', isActive: true, lastUpdatedOn: new Date() },
    ];

    let pages: Pages[] = [
      {
        id: 1,
        title: 'Dashboard',
        isParent: true,
        iconPath: 'bi bi-clipboard',
        path: '/test/test',
        rank: 1,
        class: 'parent',
        isActive: true,
        lastUpdatedOn: new Date(),
      },
      {
        id: 2,
        title: 'System Administration',
        isParent: true,
        iconPath: 'bi bi-gear-wide',
        path: '/test/test',
        rank: 2,
        class: 'parent',
        isActive: true,
        lastUpdatedOn: new Date(),
      },
      {
        id: 3,
        title: 'Organization Settings',
        isParent: false,
        iconPath: 'fs-4 bi-table',
        path: '/test/test',
        rank: 1,
        class: 'parent',
        isActive: true,
        lastUpdatedOn: new Date(),
      },
      {
        id: 4,
        title: 'Documentation',
        isParent: false,
        iconPath: 'dummy path',
        path: '/test/test',
        rank: 2,
        class: 'sub-menu',
        isActive: true,
        lastUpdatedOn: new Date(),
      },
      {
        id: 5,
        title: 'Roles Management',
        isParent: false,
        iconPath: 'dummy path',
        path: '/test/test',
        rank: 3,
        class: 'sub-menu',
        isActive: true,
        lastUpdatedOn: new Date(),
      },

      {
        id: 6,
        title: 'Traning Management',
        isParent: true,
        iconPath: 'dummy path',
        path: '/test/test',
        rank: 5,
        class: 'sub-menu',
        isActive: true,
        lastUpdatedOn: new Date(),
      },
    ];

    const rolesAndPermissions: RolesPermissions[] = [
      { roleId: 1, page: 1 },
      { roleId: 1, page: 2 },
      { roleId: 1, page: 3 },
      { roleId: 1, page: 4 },
      { roleId: 1, page: 5 },
      { roleId: 2, page: 1 },
      { roleId: 2, page: 2 },
      { roleId: 2, page: 3 },
      { roleId: 2, page: 4 },
      { roleId: 2, page: 5 },
      { roleId: 3, page: 3 },
      { roleId: 3, page: 4 },
      { roleId: 3, page: 5 },
      { roleId: 3, page: 6 },
      { roleId: 4, page: 6 },
    ];

    let pagesOnRolesPassed = rolesAndPermissions.filter(
      (x) => x.roleId == roleId
    );

    let pagesToView: Pages[] = [];

    pagesOnRolesPassed.forEach((element) => {
      let page: Pages = pages.filter((x) => x.id == element.page)[0];
      pagesToView.push(page);
    });

    return pagesToView;
  };
}
