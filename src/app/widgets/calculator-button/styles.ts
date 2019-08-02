import styled from 'styled-components';

interface ItemProps {
    active: boolean;
}

export const StyledCalculatorButton = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    outline: 1px solid;
    margin-top: 1px;
    user-select: none;
    margin-left: 1px;
    ${props => props.active && `background-color: ${props.theme.color.$mBlue_l4};`}
    :hover {
        background-color: ${props => props.theme.color.$mBlue_l4};
    }
`;
