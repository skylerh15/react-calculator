import * as React from 'react';
import { CalcValues, Key } from 'enums';
import CalculatorButton from 'app/widgets/calculator-button';

import { ButtonContainer, CalcContainer, ButtonRow } from './styles';

export type Props = {};
export type State = {
    inputValue: string;
    result: number;
};

class Calculator extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { inputValue: '', result: 0 };
    }

    componentDidMount() {
        window.addEventListener('keyup', this._onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this._onKeyUp);
    }

    _onKeyUp = ({ key }: KeyboardEvent) => {
        switch (key) {
            case Key.ENTER:
                return this.calculateInput();
            case Key.BACKSPACE:
                return this.handleDelete();
            case Key.ESCAPE:
                return this.handleClear();
            default:
                return;
        }
    };

    setInputValue = (inputValue: string) => this.setState({ inputValue });

    setResult = (result: number) => this.setState({ result });

    handleClick = (value: CalcValues) => this.setInputValue(this.state.inputValue.concat(value));

    handleDelete = () => {
        const { inputValue } = this.state;
        this.setInputValue(inputValue.substring(0, inputValue.length - 1));
    };

    handleClear = () => this.setInputValue('');

    renderButton = (value: CalcValues) => {
        return <CalculatorButton buttonValue={value} onClick={this.handleClick} />;
    };

    calculateInput = () => {
        try {
            // eslint-disable-next-line
            const evalResult = eval(this.state.inputValue.toString());
            if (evalResult) {
                this.setResult(evalResult);
                this.handleClear();
            }
        } catch (e) {
            // do nothing
        }
    };

    render() {
        const { inputValue, result } = this.state;
        return (
            <CalcContainer>
                <input readOnly={true} value={inputValue} />
                <br />
                <input readOnly={true} value={result} />
                <ButtonContainer>
                    <ButtonRow>
                        {this.renderButton(CalcValues.Divide)}
                        {this.renderButton(CalcValues.Multiply)}
                        {this.renderButton(CalcValues.Subtract)}
                        {this.renderButton(CalcValues.Add)}
                    </ButtonRow>
                    <ButtonRow>
                        {this.renderButton(CalcValues.Seven)}
                        {this.renderButton(CalcValues.Eight)}
                        {this.renderButton(CalcValues.Nine)}
                    </ButtonRow>
                    <ButtonRow>
                        {this.renderButton(CalcValues.Four)}
                        {this.renderButton(CalcValues.Five)}
                        {this.renderButton(CalcValues.Six)}
                    </ButtonRow>
                    <ButtonRow>
                        {this.renderButton(CalcValues.One)}
                        {this.renderButton(CalcValues.Two)}
                        {this.renderButton(CalcValues.Three)}
                    </ButtonRow>
                    <ButtonRow>
                        {this.renderButton(CalcValues.Zero)}
                        {this.renderButton(CalcValues.Decimal)}
                    </ButtonRow>
                </ButtonContainer>
            </CalcContainer>
        );
    }
}

export default Calculator;
