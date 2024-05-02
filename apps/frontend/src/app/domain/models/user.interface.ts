import { FormConfigId } from "../types/form-config-id.type";

export interface User {
    id: string;
    name: string;
    lastName: string;
    male: boolean;
    bornDate: Date;
    registeredOn: Date;
    email: string;
    pwd: string;
    forms?: FormConfigId[];
}

export type UserRegistration = Omit<User, 'id' | 'registeredOn' | 'forms'>;
export type UserAuth = Pick<User, 'email' | 'pwd'>;