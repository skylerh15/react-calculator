import * as React from 'react';
import { CalcValues, Key } from 'enums';
import { ButtonOrder } from 'app-constants';
import CalculatorButton from 'app/widgets/calculator-button';

import { ButtonContainer, ButtonRow, CalcContainer } from './styles';

export type Props = {};
export type State = {
    inputValue: string;
    result: string;
};

class Calculator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { inputValue: '', result: '' };
    }

    componentDidMount() {
        window.addEventListener('keyup', this._onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this._onKeyUp);
    }

    _onKeyUp = ({ key }: KeyboardEvent) => {
        switch (key) {
            case Key.BACKSPACE:
                return this.handleDelete();
            case Key.ESCAPE:
                return this.handleClear();
            default:
                return;
        }
    };

    calculateInput = () => {
        try {
            // eslint-disable-next-line
            const evalResult = eval(this.state.inputValue);
            if (evalResult !== undefined) {
                this.setResult(evalResult);
            }
        } catch (e) {
            this.setResult('error');
        }
        this.handleClear(true);
    };

    setInputValue = (inputValue: string) => this.setState({ inputValue });

    setResult = (result: string) => this.setState({ result });

    handleClick = (value: CalcValues) => {
        if (value === CalcValues.Enter) {
            this.calculateInput();
        } else {
            this.setInputValue(this.state.inputValue.concat(value));
        }
    };

    handleDelete = () => {
        const { inputValue } = this.state;
        this.setInputValue(inputValue.substring(0, inputValue.length - 1));
    };

    handleClear = (showResult?: boolean) => {
        this.setInputValue('');
        if (!showResult) {
            this.setResult('');
        }
    };

    renderButton = (value: CalcValues) => (
        <CalculatorButton key={value} buttonValue={value} onClick={this.handleClick} />
    );

    renderRow = (row: CalcValues[], index: number) => <ButtonRow key={index}>{row.map(this.renderButton)}</ButtonRow>;

    render() {
        const { inputValue, result } = this.state;
        return (
            <CalcContainer>
                <input readOnly={true} value={inputValue} />
                <br />
                <input readOnly={true} value={result} />
                <ButtonContainer>{ButtonOrder.map(this.renderRow)}</ButtonContainer>
            </CalcContainer>
        );
    }
}

export default Calculator;
