import { Sidebar } from './components/Sidebar';
import styled from 'styled-components';
import { MainPage } from './components/MainPage';
import { BrowserRouter } from 'react-router-dom';

const SContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
`;

function App() {
  return (
    <SContainer>
      <BrowserRouter>
        <Sidebar />
        <MainPage />
      </BrowserRouter>
    </SContainer>
  );
}

export default App;
