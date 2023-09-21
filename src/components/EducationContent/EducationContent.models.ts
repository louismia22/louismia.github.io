export enum ContentType {
    TEXT = 'TEXT',
    LIST = 'LIST',
  }
  
  export type ItemTypes = string | string[];
  
  export interface ItemContent {
    type: ContentType;
    content: ItemTypes;
  }
  
  export interface EducationItem {
    title?: string;
    subTitle?: string;
    info?: string;
    content?: ItemContent[];
  }
  
  export interface EducationContentProps {
    educations: EducationItem[];
  }
  