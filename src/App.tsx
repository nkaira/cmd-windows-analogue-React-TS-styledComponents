import { FC } from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import Flex from 'components/Flex';
import Console from 'components/Console';
import Button from 'components/Button';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: black;
color: white;
`

const App: FC = () => {
  return (
    <AppWrapper>
      <Flex justify={'center'}>
        <Title>Console cmd 2022</Title>
      </Flex>
      <Flex direction={'column'} margin={'20px 0px'}>
        <Console color={'green'} />
        <Button primary outlined align={'flex-end'}>Отправить</Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
