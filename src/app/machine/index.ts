import { Machine } from 'xstate';
import schema from './app';
import actions from './config/actions';
import services from './config/services';
import guards from './config/guards';

// @ts-ignore
export default Machine(schema, {
    actions,
    services,
    guards
});
