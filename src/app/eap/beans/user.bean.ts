import { Enrollment } from "./enrollment.bean";
import { UserRole } from "./user-role.bean";

export class User {
    idUser:number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    idProfessionalSchool: number;
    career: string;
    username: string;
    password: string;
    enrollments: Array<Enrollment>;
    userRoles: Array<UserRole>
}