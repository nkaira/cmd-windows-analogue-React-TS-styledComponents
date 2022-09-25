import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ITitle {
    children: ReactNode;
    color?: string;
}

const StyledTitle = styled.h1<ITitle>`
color: ${props => props.color || props.theme.colors.primary};
`

const Title: FC<ITitle> = (props) => {

    return (
        <StyledTitle {...props} />
    );
};

export default Title;
