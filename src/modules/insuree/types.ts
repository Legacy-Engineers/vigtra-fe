import type { DateTimeString } from '../core/types';
import type {
  HealthFacilityGqlItemType,
  LocationGqlItemType,
} from '../location/types';

export type mariatialStatusType = 'S' | 'M' | 'D' | 'W'; //Single, Married, Divorced or widowed
export type insureeStatusType = 'AC' | 'IN' | 'DE' | 'SU' | 'PE'; //Single, Married, Divorced or widowed

export interface insureeFamilyMemberships {
  id: string;
}

export interface InsureeGqlItem {
  id: string;
  uuid: string;
  jsonExt?: string;
  validityFrom: DateTimeString;
  validityTo?: DateTimeString;
  chfId: string;
  lastName: string;
  otherNames: string;
  dob: Date;
  mariatialStatus: mariatialStatusType;
  passport?: string;
  phone?: string;
  email?: string;
  currentAddress?: string;
  geolocation?: string;
  photo?: string;
  photoData?: string;
  cardIssued: boolean;
  cardIssuedDate?: Date;
  identificationNumber?: string;
  offline: boolean;
  status: insureeStatusType;
  statusDate?: Date;
  createdDate?: DateTimeString;
  lastModified?: DateTimeString;
  familyMemberships: insureeFamilyMemberships;
  location: LocationGqlItemType;
  secondaryHealthFacility?: HealthFacilityGqlItemType;
  healthFacility: HealthFacilityGqlItemType;
  otherHealthFacilities?: HealthFacilityGqlItemType;
}

type InsureeGqlNode = Array<InsureeGqlItem>;

export interface InsureeListGQL {
  edges: InsureeGqlNode[];
}
