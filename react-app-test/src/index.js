import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 두번씩 렌더링하는 이슈 제거 위해 주석처리 -> 오류를 예방하기 위한 product용 모드
  <App />
  // </React.StrictMode>
);
