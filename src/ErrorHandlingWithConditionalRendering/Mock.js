import { useState, useEffect } from "react";
import "./styles.css";

export default function Mock() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/mock.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="Mock">
      <h1>Hello useEffect!</h1>
      <h2>조건부 렌더링 연습 문제</h2>
      <ul>
        {data.users &&
          data.users.map((user) => {
            return;
            <li key={user.id}>{user.username}</li>;
          })}
      </ul>
    </div>
  );
}
