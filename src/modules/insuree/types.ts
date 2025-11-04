import type { coreGqlFormType, corePaginationInfoGqlType, DateTimeString } from '../core/types';
import type {
  HealthFacilityGqlItemType,
  LocationGqlItemType,
} from '../location/types';

export type insureeTabType = 'ins' | 'fam' | 'con' | 'pol';
export type mariatialStatusType = 'S' | 'M' | 'D' | 'W'; //Single, Married, Divorced or widowed
export type insureeStatusType = 'AC' | 'IN' | 'DE' | 'SU' | 'PE'; //Active, Inactive, Deceased, Suspended or Pending

export interface Family {
  id: string;
}

export interface identificationTypeGqlType {
  id: string;
  code: string;
  name: string;
}

export interface insureeIdentificationItemGqlType {
  id: string;
  uuid: string;
  identificationNumber: string;
  identificationType: identificationTypeGqlType;
}

export interface familyGqlItemType {
  id: string;
  uuid: string;
  headInsuree: InsureeGqlItem;
  memberships: {
    edges: Array<{ node: insureeFamilyMemberships }>;
  }
}


export interface insureeFamilyMemberships {
  id: string;
  uuid: string;
  familyName: string;
  hasClaimBenefits: boolean;
  family: familyGqlItemType;
  isHead: boolean;
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
  fullName: string;
  dob: Date;
  age: number;
  isAdult: boolean;
  genderName: string;
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
  professionName?: string;
  createdDate?: DateTimeString;
  lastModified?: DateTimeString;
  familyMemberships: { edges?: Array<{ node: insureeFamilyMemberships }> };
  location: LocationGqlItemType;
  secondaryHealthFacility?: HealthFacilityGqlItemType;
  identifications?: insureeIdentificationItemGqlType[];
  healthFacility: HealthFacilityGqlItemType;
  otherHealthFacilities?: HealthFacilityGqlItemType;
}


export interface InsureeListGQL {
  pageInfo?: corePaginationInfoGqlType;
  edges: Array<{ node: InsureeGqlItem, }>;
}


export interface InsureeGqlSearchForm extends coreGqlFormType {
  chfId?: string;
  chfId_Icontains?: string;
  chfId_Istartswith?: string;
  lastName?: string;
  lastName_Icontains?: string;
  lastName_Istartswith?: string;
  otherNames?: string;
}