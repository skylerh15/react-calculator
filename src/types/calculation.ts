import { UserVariable } from './user-variable';

export interface Calculation {
    originalInput: string;
    timestamp: Date;
    variables?: Array<UserVariable>;
}
