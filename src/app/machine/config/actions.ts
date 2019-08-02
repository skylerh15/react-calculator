import { assign } from 'xstate';

const assignValue = (_: any, event: any) => event.data;
// const removeValue = () => undefined;
const logValue = (ctx: any, event: any) => console.log(event.data);

export default {
    setUserVariables: assign({ userVariables: assignValue }),

    // utility
    logError: logValue
};
