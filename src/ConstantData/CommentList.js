import React from "react";
import Comment from "./Comment";
import CommentData from "./CommentData";

// function CommentList() {
//   return (
//     <div className="commentList">
//       <h1>댓글 리스트</h1>
//       <ul>
//         <Comment name="wecode" comment="Test" />
//         {/* 자식 컴포넌트에게 name 및
//         comment 속성을 물려준다. */}
//         <Comment name="Jonngmin" comment="What" />
//         <Comment name="Test" comment="Time" />
//       </ul>
//     </div>
//   );
// }

function CommentList() {
  return (
    <div className="CommentList">
      <h1>댓글 리스트</h1>
      <ul>
        {CommentData.map((comment) => {
          return (
            <Comment
              id={comment.id}
              name={comment.userName}
              comment={comment.comment}
            />
          );
        })}
      </ul>
      np
    </div>
  );
}

export default CommentList;
