import { Course } from "./course.bean";

export class Curricula {
    idCurriculum: number;
    name: string;
    amountCredits: number;
    yearCreation: Date;
    idProfessionalSchool: number;
    courses: Array<Course>;
}