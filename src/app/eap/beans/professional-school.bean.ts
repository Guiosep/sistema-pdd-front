import { Curricula } from "./curricula.bean";
import { User } from "./user.bean";

export class ProfessionalSchool {
    idProfessionalSchool: number;
    name: string;
    curricula: Array<Curricula>;
    users: Array<User>;
}