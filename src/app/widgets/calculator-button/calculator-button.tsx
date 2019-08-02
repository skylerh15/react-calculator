import * as React from 'react';

import { CalcValues } from 'enums';

import { StyledCalculatorButton } from './styles';

type Props = {
    buttonValue: CalcValues;
    onClick: (value: CalcValues) => void;
};

const CalculatorButton: React.FC<Props> = ({ buttonValue, onClick }) => {
    const [active, setActive] = React.useState(false);

    window.addEventListener('keydown', e => {
        if (e.key === buttonValue) {
            setActive(true);
            onClick(buttonValue);
        }
    });
    window.addEventListener('keyup', e => {
        if (e.key === buttonValue) {
            setActive(false);
        }
    });
    return (
        <StyledCalculatorButton onClick={() => onClick(buttonValue)} active={active}>
            {buttonValue}
        </StyledCalculatorButton>
    );
};

export default CalculatorButton;
