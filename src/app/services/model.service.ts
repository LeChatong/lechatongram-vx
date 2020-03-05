
export interface APIResponse {
  status: number;
  message?: string;
  data?: any;
}

export interface Login {
  username: string;
  email: string;
}

export class UserModel {
  id: number;
  password: string;
  last_login: Date;
  is_superuser: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: Date;
}
