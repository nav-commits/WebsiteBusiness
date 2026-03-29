export interface ProcessStep {
    _id: string;
    title: string;
    description: string;
    icon: string;
    note?: string;
    order: number;
  }