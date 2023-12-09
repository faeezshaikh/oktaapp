
interface IrisData {
    config: {};
    Capabilities: Capability[];
   }
  
  export interface Capability {
      type: string;
      name: string;
      internalId: string;
      createdBy: string;
      createdTimestamp: string;
      modifiedBy: string;
      modifiedTimestamp: string;
      protectfromDelete: boolean;
      filtered: boolean;
      children: Level1sChild[]
   }
  
  export interface Level1sChild {
      type: string;
      name: string;
      description: string;
      internalId: string;
      createdBy: string;
      createdTimestamp: string;
      modifiedBy: string;
      modifiedTimestamp: string;
      protectfromDelete: boolean;
      filtered: boolean;
      attributes: Attrib[],
      children: Level2sChild[]
      comments: Comment[]
   }
  
   interface Attrib {
    attributeName: string;
    attributeValue: string;
  
   }
  
   interface Comment {
    commentingUser: string;
    comment: string;
    commentDate: string;
    commentArchived: boolean
   }
  
   export interface Level2sChild {
    type: string;
    name: string;
    description: string;
    internalId: string;
    createdBy: string;
    createdTimestamp: string;
    modifiedBy: string;
    modifiedTimestamp: string;
    filtered: boolean;
    capEnablesStageRelationship: any[],
    attributes: Attrib[],
    children: Level2sChild[]
    comments: Comment[]
  
   }