
export interface LocationTypeGqlType {
  id: string;
  name: string;
  level: number;
}

export interface LocationGqlItemType {
  id: string;
  name: string;
  type: LocationTypeGqlType;
  parent?: LocationGqlItemType;
}

export interface HealthFacilityGqlItemType {
  id: string;
}
