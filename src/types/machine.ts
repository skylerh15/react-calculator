import { UserVariable } from './user-variable';
import { Calculation } from './calculation';

export type MachineContext = {
    userVariables: Array<UserVariable>;
    pastResults: Array<Calculation>;
};
