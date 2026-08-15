import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">데모라이즈 앱</h1>
        <p className="app-subtitle">첫 번째 버전 홈 화면입니다.</p>
      </header>

      <main className="app-main">
        <div className="card">
          <h2 className="card-title">시작하기</h2>
          <p className="card-desc">
            앞으로 여기서 로그인, 대시보드, 테스트 화면 등이 추가될 거예요.
          </p>
          <button className="card-btn">
            로그인 화면으로 이동 (곧 만들 예정)
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
