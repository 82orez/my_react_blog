import { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: 1px solid #ccc;
  margin: 20px;
  padding: 20px;
`;

const StyledDivUsers = styled.div`
  margin: 10px;
  padding: 10px;

  display: flex;
  //justify-content: space-between;

  & > p {
    margin: 0 20px;
  }
`;

export const FetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ! 아래의 함수는 useEffect() 훅을 사용해서 최초 렌더링때만 실행되게 할 수도 있음.
  const onclickBttn = () => {
    setIsLoading(true);
    setIsError(false);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((re) => re.json())
      .then((re) => {
        let users = [...re];
        setUserList(users);
        return 'Hello Promise~!';
      })
      .then((re) => console.log(re))
      .catch((e) => {
        setIsError(true);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Fetch Users!</h1>
      <button style={{ marginLeft: '20px', marginTop: '20px' }} onClick={onclickBttn}>
        Get user's information!
      </button>

      <StyledWrapper>
        <h3>User's Information.</h3>
        {isError && <h1 style={{ color: 'red' }}>Error</h1>}
        {isLoading ? (
          <p>Loading!!!</p>
        ) : (
          userList.map((user, index) => {
            return (
              <StyledDivUsers key={index}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </StyledDivUsers>
            );
          })
        )}
      </StyledWrapper>
    </div>
  );
};
