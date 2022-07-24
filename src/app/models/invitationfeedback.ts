import { EmployeeF } from "./employeefeedback";

export class InvitationF {
    id: number ;
    sender: EmployeeF;
    receiver: EmployeeF;
    statut: boolean;
    dateTimeOfInvitation: string;
    disabled: boolean;

  }