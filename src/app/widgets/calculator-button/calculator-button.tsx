import * as React from 'react';

import { CalcValues } from 'enums';

import { StyledCalculatorButton } from './styles';

type Props = {
    buttonValue: CalcValues;
    onClick: (value: CalcValues) => void;
};

const CalculatorButton: React.FC<Props> = ({ buttonValue, onClick }) => {
    const [active, toggleActive] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('keydown', _onKeyDown);
        window.addEventListener('keyup', _onKeyUp);

        return () => {
            window.removeEventListener('keydown', _onKeyDown);
            window.removeEventListener('keyup', _onKeyUp);
        };
    });

    const handleClick = () => onClick(buttonValue);

    const _onKeyDown = ({ key }: KeyboardEvent) => {
        if (key === buttonValue && !active) {
            toggleActive(true);
        }
    };

    const _onKeyUp = ({ key }: KeyboardEvent) => {
        if (key === buttonValue) {
            toggleActive(false);
            handleClick();
        }
    };

    return (
        <StyledCalculatorButton onClick={handleClick} active={active}>
            {buttonValue}
        </StyledCalculatorButton>
    );
};

export default CalculatorButton;
