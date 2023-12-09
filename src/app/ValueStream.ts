export interface Identifier {
    id: string;
    systemName: string;
    systemOfRecord: boolean;
}

export interface RelatedElement {
    relationshipType: string;
    childElementName: string;
}

export interface ChildElement {
    type: string;
    name: string;
    description: string;
    createdBy: string;
    createTimeStamp: string;
    modifiedBy: string;
    modifiedTimestamp: string;
    children: ChildElement[];
    relatedElements: RelatedElement[];
    identifiers: Identifier[];
    customProperties: any[];
    dirty: boolean;
    systemOfRecordId: string;
    systemOfRecordName: string;
}

export interface MainElement {
    type: string;
    name: string;
    description: string;
    createdBy: string;
    createTimeStamp: string;
    modifiedBy: string;
    modifiedTimestamp: string;
    children: ChildElement[];
    relatedElements: RelatedElement[];
    identifiers: Identifier[];
    customProperties: any[];
    dirty: boolean;
    systemOfRecordId: string;
    systemOfRecordName: string;
}
