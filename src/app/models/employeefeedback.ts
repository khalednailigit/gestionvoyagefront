import { ActivityTypeF } from "./activityTypefeedback";
import { CompanyF } from "./companyfeedback";
import { RoleF } from "./rolefeedback";

export class EmployeeF {
    id: number ;
    username: EmployeeF;
    email: EmployeeF;
    password: string;
    roles:RoleF[];
    fullName: string;
    adress: string;
    phone: string;
    age: number ;
    isFreeLancer:boolean ;
    activityType:ActivityTypeF;
    gender: string;
    company:CompanyF;
    

  }