import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IStyledLine {
    color?: string;
    children?: ReactNode;
}

const StyledLine = styled.div<IStyledLine>`
font-size: 24px;
color: ${props => props.color || props.theme.colors.primary};
}
`

const Line: FC<IStyledLine> = (props) => {
    return (
        <StyledLine {...props} />
    )
};

export default Line;