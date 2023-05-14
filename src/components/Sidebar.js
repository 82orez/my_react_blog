import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SidebarDiv = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid blue;

  flex-grow: 0;
  flex-basis: 150px;

  // & : SidebarDiv 의 속한다는 의미.
  // SidebarDiv 의 자식에 해당하는 p 태그의 속성을 정의하고 있음.
  & > p {
    margin: 20px 0;
  }
`;
export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarDiv>
      <p
        onClick={() => {
          navigate('/');
        }}>
        Tweets <i className="fa-brands fa-twitter"></i>
      </p>
      <p
        onClick={() => {
          navigate('/memos');
        }}>
        Memos <i className="fa-solid fa-list"></i>
      </p>
      <p
        onClick={() => {
          navigate('/fetch_users');
        }}>
        Fetch users <i className="fa-solid fa-magnifying-glass-plus"></i>
      </p>
      <p
        onClick={() => {
          navigate('/about');
        }}>
        About <i className="fa-solid fa-question"></i>
      </p>
      <p
        onClick={() => {
          navigate('mypage');
        }}>
        My page <i className="fa-solid fa-user"></i>
      </p>
    </SidebarDiv>
  );
};
