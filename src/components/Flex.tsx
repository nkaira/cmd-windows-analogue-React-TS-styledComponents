import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IStyledFlex {
    children: ReactNode;
    direction?: string;
    align?: string;
    justify?: string;
    margin?: string;
}

const StyledFlex = styled.div<IStyledFlex>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin:${({ margin }) => margin || '0'} ;
`

const Flex: FC<IStyledFlex> = (props) => {
    return (
        <StyledFlex {...props} />
    )
};

export default Flex;