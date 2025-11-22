import type { CoreGQLEdge, CoreVersionModel } from "./core";


export interface InsureeGQLItemType extends CoreVersionModel {
    id: string;
    uuid: string;
    chfId?: string;
    lastName: string;
    otherNames: string;
    dob: string;
}

export interface InsureeGQLPageInfo extends CoreGQLEdge {
    node: InsureeGQLItemType;
}