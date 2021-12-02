// 예제에는 Comment.js 컴포넌트가 없어서 신규로 생성

import React from "react";

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <span>{props.name}</span>
//       {/* 부모에게서 전달받은 name의 값을 표시해준다. */}
//       <span>:</span>
//       <span>{props.comment}</span>
//     </div>
//   );
// }

function Comment(props) {
  return (
    <div className="Comment">
      <span>Name : </span>
      <span>{props.name}</span>
      <p></p>
      <span>ID : </span>
      <span>{props.id}</span>
      <p></p>
      <span>Comment : </span>
      <span>{props.comment}</span>
      <p></p>
    </div>
  );
}

export default Comment;
