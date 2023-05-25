export interface User {
  name: string;
  age: number;
}

export interface Kid extends User {
  id: number;
}

export type FormType = 'user' | 'kid';
