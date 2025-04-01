export interface RegisterUserDTO {
  name: string;
  email: string;
  password: string;
  course: string;
  registration: string;
  role: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  course?: string;
  registration?: string;
  role?: string;
}
