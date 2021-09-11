export interface Information {
  phone?: string;
  numberOfEmployees: number;
  companyName: string;
}


export interface StatusChange {
  status: 'ACTIVE' | 'INACTIVE' | 'PAID' | 'PAY_ERROR' | 'PENDING' | 'BLOCK' | 'DISABLE' | 'ENABLE' | 'PAY_WAITING' | 'NOT_ALLOW'
}
export interface User {
  id?: string;
  username: string;
  email: string;
  status: StatusChange;
  information?: Information
}

export interface ListResponse<T> {
  count: number;
  rows: T[];
}

