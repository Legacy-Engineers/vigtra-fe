export type GqlNode = Array<object>;
export type GqlEdges = Array<GqlNode>;
export type DateTimeString = string;

export type userGroupNodeGqlType = Array<userGroupGqlItemType>;
export type userGqlNodeType = Array<userGqlItemType>;
export type userPermissionNodeGqlType = Array<userPermissionGqlItemType>;

export interface userPermissionGqlItemType {
  id: string;
  name: string;
  codename: string;
  groupSet: userGroupNodeGqlType[];
}

export interface userGroupGqlItemType {
  id: string;
  name: string;
  permissions: userPermissionGqlItemType[];
  userSet: userGqlNodeType[];
}

export interface userGqlItemType {
  id: string;
  uuid: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  isActive: boolean;
  dateJoined: DateTimeString;
  lastLogin?: DateTimeString;
  isSuperuser: boolean;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
  groups: userGroupNodeGqlType[];
}
