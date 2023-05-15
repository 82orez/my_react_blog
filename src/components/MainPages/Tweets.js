// import data from '../../data.json';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledTable = styled.table`
  border: 1px solid red;
  width: calc(100% - 16px);

  padding: 5px;
  margin: 5px;

  // 테이블 테두리를 이중선이 아닌 실선으로 표현.
  border-collapse: collapse;

  & * {
    padding: 5px;

    // th, td 에서는 margin 적용이 안되는 듯함.
    //margin: 5px;

    border: 1px solid #ccc;
  }
`;

export const Tweets = () => {
  const [tweetList, setTweetList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const callData = () => {
    setIsLoading(true);
    setIsError(false);

    fetch('https://koreanjson.com/comments')
      .then((re) => re.json())
      .then((re) => {
        // let data = [...re];
        setTweetList(re);
      })
      .catch((e) => {
        setIsError(true);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(callData, []);

  return (
    <div>
      <h1>Tweet Lists</h1>
      {isError && <h1 style={{ color: 'red' }}>Error!</h1>}
      {isLoading ? (
        <h1>Loading!!!</h1>
      ) : (
        <StyledTable>
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {tweetList.map((tweet) => {
              return (
                <tr key={tweet.id}>
                  <td style={{ width: '50px', textAlign: 'center' }}>{tweet.id}</td>
                  <td style={{ paddingLeft: '20px' }}>{tweet.content}</td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
};
