import { Content } from "./content.bean";
import { EnrollmentDetail } from "./enrollment-detail.bean";
import { Lab } from "./lab.bean";
import { Task } from "./task.bean";

export class Course {
    idCourse: number;
    name: string;
    credits: string;
    idCurriculum: number;
    contents: Array<Content>;
    enrollmentDetail: Array<EnrollmentDetail>;
    labs: Array<Lab>;
    tasks: Array<Task>;
    
}