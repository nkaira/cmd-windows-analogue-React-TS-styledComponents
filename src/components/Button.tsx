import { FC, ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import * as types from 'styled-components/cssprop';

interface IStyledButton {
    align?: string;
    children?: ReactNode;
    primary?: boolean;
    outlined?: boolean;
}

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`

const StyledButton = styled.button.attrs<IStyledButton>(props => ({ // так подключаются пропсы по умолчанию
    outlined: true, // при typescript интерфейс нужно указывать дважды
})) <IStyledButton>` 
border: none;
padding: 10px 15px;
font - size: 18px;
cursor: pointer;
&:focus {
    outline: none;
}
&:hover {
    animation: ${rotateAnimation} 1s infinite linear;
}
align-self: ${props => props.align || 'stretch'};

${props => props.primary && css`
    color: purple;
    background: white;
`}

${props => props.outlined && css`
    border: 1px solid purple;
    background: transparent;
`}
`

// наследование
const LargeButton = styled(StyledButton)`
font-size: 32px;
`

const Button: FC<IStyledButton> = (props) => {
    return (
        <StyledButton {...props} />
    )
};

export default Button;