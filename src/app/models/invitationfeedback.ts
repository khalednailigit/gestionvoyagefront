import { EmployeeF } from "./employeefeedback";

export class InvitationF {
    id: number ;
    sent: EmployeeF;
    recpt: EmployeeF;
    statut: boolean;
    dateTimeOfInvitation: string;
    disabled: boolean;

  }