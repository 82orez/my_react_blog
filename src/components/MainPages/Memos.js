import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-left: 16px;
  cursor: pointer;
  //padding: 10px;
`;
const StyledContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;

  & > ul {
    padding: 20px 20px 0 20px;
  }

  & > ul > li {
    margin: 10px 0;
    :last-child {
      margin-bottom: 1px;
    }
  }
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Memos = () => {
  let localData;

  if (localStorage.getItem('memos') !== null) {
    localData = JSON.parse(localStorage.getItem('memos'));
  } else {
    localData = [];
  }

  const [text, setText] = useState('');
  const [memos, setMemos] = useState(localData);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    const textArea = document.querySelector('input[type=text]');

    if (textArea.value.length === 0) {
      alert('Input Something!!!');
    } else {
      let newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
      localStorage.setItem('memos', JSON.stringify(newMemos));
      textArea.value = '';
      setText('');
    }
  };

  const onClickDel = (index) => {
    let newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    localStorage.setItem('memos', JSON.stringify(newMemos));
  };

  return (
    <div>
      <h1>Memos</h1>
      <input type={'text'} value={text} onChange={onChange} />
      <StyledButton onClick={onClickAdd}>글 작성하기</StyledButton>

      <StyledContainer>
        <p>Memo List</p>
        <ul>
          {memos.map((memo, idx) => {
            return (
              <li key={idx}>
                <SMemoWrapper>
                  <span>{memo}</span>
                  <StyledButton onClick={() => onClickDel(idx)}>Del</StyledButton>
                </SMemoWrapper>
              </li>
            );
          })}
        </ul>
      </StyledContainer>
    </div>
  );
};
