import styled from 'styled-components';
// import {useState} from 'react';
import { Tweets } from './MainPages/Tweets';
import { Route, Routes } from 'react-router-dom';
import { About } from './MainPages/About';
import { MyPage } from './MainPages/MyPage';
import { Memos } from './MainPages/Memos';
import { FetchUsers } from './MainPages/FetchUsers';

const MainPageDiv = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid green;

  flex-grow: 1;
  max-width: 720px;
`;
export const MainPage = () => {
  return (
    <MainPageDiv>
      <Routes>
        <Route path={'/fetch_users'} element={<FetchUsers />} />
        <Route path={'/'} element={<Tweets />} />
        <Route path={'/memos'} element={<Memos />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/mypage'} element={<MyPage />} />
      </Routes>
    </MainPageDiv>
  );
};
