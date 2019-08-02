import * as React from 'react';

import { CalcValues } from 'enums';

import { StyledCalculatorButton } from './styles';

type Props = {
    buttonValue: CalcValues;
    onClick: (value: CalcValues) => void;
};

type State = {
    active: boolean;
};

class CalculatorButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { active: false };
    }

    componentDidMount() {
        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('keyup', this._onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this._onKeyDown);
        window.removeEventListener('keyup', this._onKeyUp);
    }

    _onKeyDown = ({ key }: KeyboardEvent) => {
        if (key === this.props.buttonValue) {
            this.setActive(true);
        }
    };

    _onKeyUp = ({ key }: KeyboardEvent) => {
        if (key === this.props.buttonValue) {
            this.setActive(false);
            this.handleClick();
        }
    };

    handleClick = () => {
        const { buttonValue, onClick } = this.props;
        onClick(buttonValue);
    };

    setActive = (active: boolean) => {
        if (this.state.active !== active) {
            this.setState({ active });
        }
    };

    render() {
        const { buttonValue } = this.props;
        const { active } = this.state;
        return (
            <StyledCalculatorButton onClick={this.handleClick} active={active}>
                {buttonValue}
            </StyledCalculatorButton>
        );
    }
}

export default CalculatorButton;
