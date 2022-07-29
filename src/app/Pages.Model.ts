export class Pages {
  id: number;
  title: string;
  isParent: boolean;
  rank: number;
  path: string;
  class: string;
  iconPath: string;
  lastUpdatedOn: Date;
  isActive: boolean;
}

export class RolesAndPermissions{
  access : Map<string,boolean>;
  canUserEdit : boolean;
}

