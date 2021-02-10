import { EnrollmentDetail } from "./enrollment-detail.bean";

export class Enrollment {
    idEnrollment: number;
    cycle: number;
    date: Date;
    idUser: number;
    amountCredits: number;
    enrollmentDetails: Array<EnrollmentDetail>;
}