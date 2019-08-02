import styled from 'styled-components';

interface ItemProps {
    active: boolean;
}

export const StyledCalculatorButton = styled.div<ItemProps>`
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 18px;
    font-family: IBMPlexSans-Regular, sans-serif;
    justify-content: center;
    height: 50px;
    width: 50px;
    outline: 1px solid;
    margin-top: 1px;
    user-select: none;
    margin-left: 1px;
    ${props => props.active && `background-color: ${props.theme.color.$mBlue_l4};`}
    :hover {
        background-color: ${props => props.theme.color.$mBlue_l4};
    }
`;
