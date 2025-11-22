export type dateTimeString = string;

export interface CoreGQLPageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export interface CoreVersionModel {
    validityFrom: dateTimeString;
    validityTo?: dateTimeString;
}


export interface CoreGQLEdge {
    cursor: string;
    node?: object;
}

