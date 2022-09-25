import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import Flex from './Flex';
import Line from './Line';

interface IStyledConsole {
    color?: string;
    children?: ReactNode;
}

const StyledConsole = styled.textarea<IStyledConsole>`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
}
@media ${props => props.theme.media.phone} {
    border: 1px solid red;
}
@media ${props => props.theme.media.tablet} {
    border: 1px solid green;
}
`

const Console: FC<IStyledConsole> = ({ color }, ...props) => {
    const [lines, setLines] = useState([`C/users/myUser>`]);

    const onKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.code === 'Enter') {
            setLines([...lines, `C/users/myUser>`])
        }
    }
    return (
        <Flex>
            <Flex direction={'column'} margin={'0px 10px'}>
                {lines.map((line, index) => (
                    <Line key={index} color={color}>{line}</Line>
                ))}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
        </Flex>
    )
};

export default Console;