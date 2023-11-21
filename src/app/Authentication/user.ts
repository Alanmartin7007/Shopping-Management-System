import { Role } from "./role";

export interface User {
    id:number;
    name:string;
    email:string;
    password:string;
    dateofbirth:Date;
    role:Role;
}
