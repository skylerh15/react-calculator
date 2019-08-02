import * as React from 'react';
import { useMachine } from '@xstate/react';

import appMachine from './machine';

import CalcView from 'app/views/calculator';

import { OutsideWrapper, MiddleWrapper, InnerContent } from './styles';

export const AppMachine = React.createContext<null | any>(null);

const App = () => {
    const [current, send, service] = useMachine(appMachine);

    return (
        <AppMachine.Provider value={service}>
            <OutsideWrapper>
                <MiddleWrapper>
                    <InnerContent>
                        <CalcView />
                    </InnerContent>
                </MiddleWrapper>
            </OutsideWrapper>
        </AppMachine.Provider>
    );
};

export default App;
