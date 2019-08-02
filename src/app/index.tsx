import * as React from 'react';
import { useMachine } from '@xstate/react';

import appMachine from './machine';

export const AppMachine = React.createContext<null | any>(null);

const App = () => {
    const [current, _, service] = useMachine(appMachine);

    return (
        <AppMachine.Provider value={service}>
            <div>{current.toStrings()}</div>
        </AppMachine.Provider>
    );
};

export default App;
