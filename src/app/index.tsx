import * as React from 'react';
import { useMachine } from '@xstate/react';

import appMachine from './machine';

import Calculator from 'app/views/calculator';

import { OutsideWrapper, MiddleWrapper, InnerContent } from './styles';

export const AppMachine = React.createContext<null | any>(null);

const App = () => {
    const [current, send, service] = useMachine(appMachine);

    return (
        <AppMachine.Provider value={service}>
            <OutsideWrapper>
                <MiddleWrapper>
                    <InnerContent>
                        <Calculator />
                    </InnerContent>
                </MiddleWrapper>
            </OutsideWrapper>
        </AppMachine.Provider>
    );
};

export default App;
