export enum Priority {
  LOW = 'Low',
  MED = 'Med',
  HIGH = 'High'
}

export enum TextType {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Description,
  BodySmall,
  Bold
}

export type TaskType = {
  priority: Priority;
  description: string;
  attachmentNumber: number;
  commentNumber: number;
}

export type ColumnType = {
  title: string;
  tasks: TaskType[];
  color: string;
  id: string;
  userUID: string;
}

export type ContextType = {
  user: any;
  userUID: string,
}
