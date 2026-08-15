import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h1 className="card-title">데모라이즈 앱</h1>
        <p className="card-desc">용섭이 만든 첫 번째 리액트 페이지!</p>
        <button
          className="card-btn"
          onClick={() => alert("버튼 클릭됨!")}
        >
          클릭해보세요
        </button>
      </div>
    </div>
  );
}

export default App;
