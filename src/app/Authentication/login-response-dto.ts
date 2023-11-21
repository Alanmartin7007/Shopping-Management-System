import { Role } from "./role";

export interface LoginResponseDto {
   
    name:string;
    email:string;
    role:Role;
    token:string;
}
