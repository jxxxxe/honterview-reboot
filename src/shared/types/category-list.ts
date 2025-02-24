export interface ICategory {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
}

export interface IPresettingCategory {
  id: number | 'new';
  name: string;
}
