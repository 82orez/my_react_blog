import data from '../../data.json';
import styled from 'styled-components';

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
  let localData;
  if (localStorage.getItem('tweets') === null) {
    localStorage.setItem('tweets', JSON.stringify(data));
  } else {
    localData = JSON.parse(localStorage.getItem('tweets'));
  }

  return (
    <div>
      <h1>Tweet Lists</h1>
      <StyledTable>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {localData.map((tweet) => {
            return (
              <tr key={tweet.id}>
                <td style={{ width: '100px', textAlign: 'center' }}>{tweet.id}</td>
                <td style={{ paddingLeft: '20px' }}>{tweet.title}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};
