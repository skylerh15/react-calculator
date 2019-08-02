import * as React from 'react';
import { useMachine } from '@xstate/react';
import styled from 'styled-components';

import appMachine from './machine';

export const AppMachine = React.createContext<null | any>(null);

const StyledDiv = styled.div`
    font-size: 45px;
    color: ${props => props.theme.color.$Red_t1};
`;

const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [current, _, service] = useMachine(appMachine);

    return (
        <AppMachine.Provider value={service}>
            <StyledDiv>{current.toStrings()}</StyledDiv>
        </AppMachine.Provider>
    );
};

export default App;
