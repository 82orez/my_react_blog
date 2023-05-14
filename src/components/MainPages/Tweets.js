import data from '../../data.json';
import styled from 'styled-components';

const StyledTable = styled.table`
  border: 1px solid red;
  width: 100%;
  
  & * {
    padding: 5px;
    //margin: 5px;
  }
  
  //padding: 5px;
  //margin: 5px;
  //height: 100vh;
  //text-align: center;
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
            <td>Number</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {/*<tr>*/}
          {localData.map((tweet, idx) => {
            return (
              <tr key={idx}>
                <td>{tweet.id}</td>
                <td>{tweet.title}</td>
              </tr>
            );
          })}
          {/*</tr>*/}
        </tbody>
      </StyledTable>
      {/*<ul>*/}
      {/*  {localData.map((tweet, idx) => {*/}
      {/*    return (*/}
      {/*      <li key={idx}>*/}
      {/*        <p>{tweet.title}</p>*/}
      {/*      </li>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</ul>*/}
    </div>
  );
};
