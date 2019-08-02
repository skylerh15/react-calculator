import * as React from 'react';
import { useMachine } from '@xstate/react';
import styled from 'styled-components';

import appMachine from 'app/machine';

const StyledDiv = styled.div`
    font-size: 45px;
    color: ${props => props.theme.color.$Red_t1};
    justify-self: center;
`;

const Calculator = () => {
    const [current, send] = useMachine(appMachine);

    return (
        <div>
            <StyledDiv>{current.toStrings()}</StyledDiv>
            <button type="button" onClick={() => send('NEXT')}>
                {current.matches('main') ? 'Next' : 'Back'}
            </button>
        </div>
    );
};

export default Calculator;
