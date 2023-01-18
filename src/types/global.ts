export enum Priority {
  LOW = 'Low',
  MED = 'Med',
  HIGH = 'High'
}

export type DataTypes = {
  priority: Priority,
  description: string,
  attachmentNumber: number,
  commentNumber: number,
};
