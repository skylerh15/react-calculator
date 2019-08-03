import * as React from 'react';
import { CalcValues, Key } from 'enums';
import { ButtonOrder } from 'app-constants';
import CalculatorButton from 'app/widgets/calculator-button';

import { ButtonContainer, ButtonRow, CalcContainer } from './styles';

const Calculator: React.FC = () => {
    const [inputValue, setInputValue] = React.useState<string>('');
    const [result, setResult] = React.useState<string>('');

    React.useEffect(() => {
        window.addEventListener('keyup', _onKeyUp);

        return () => {
            window.removeEventListener('keyup', _onKeyUp);
        };
    });

    const _onKeyUp = ({ key }: KeyboardEvent) => {
        if (key === Key.ESCAPE) {
            handleClear();
        }
    };

    const calculateInput = () => {
        try {
            // eslint-disable-next-line
            const evalResult = eval(inputValue);
            if (evalResult !== undefined) {
                setResult(evalResult);
            }
        } catch (e) {
            setResult('error');
        }
        handleClear(true);
    };

    const handleClick = (value: CalcValues) => {
        if (value === CalcValues.Enter) {
            calculateInput();
        } else if (value === CalcValues.Clear) {
            handleClear();
        } else if (value === CalcValues.Backspace) {
            handleDelete();
        } else {
            setInputValue(inputValue.concat(value));
        }
    };

    const handleDelete = () => {
        setInputValue(inputValue.substring(0, inputValue.length - 1));
    };

    const handleClear = (showResult?: boolean) => {
        setInputValue('');
        if (!showResult) {
            setResult('');
        }
    };

    const renderButton = (value: CalcValues) => (
        <CalculatorButton key={value} buttonValue={value} onClick={handleClick} />
    );

    const renderRow = (row: CalcValues[], index: number) => <ButtonRow key={index}>{row.map(renderButton)}</ButtonRow>;

    return (
        <CalcContainer>
            <input readOnly={true} value={inputValue} />
            <br />
            <input readOnly={true} value={result} />
            <ButtonContainer>{ButtonOrder.map(renderRow)}</ButtonContainer>
        </CalcContainer>
    );
};

export default Calculator;
