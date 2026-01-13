import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

export default function PostComments({ initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);

  const addComment = (comment) => {
    setComments([comment, ...comments]);
  };

  return (
    <div className="mt-16">
      <h3 className="mb-6 text-2xl font-bold">Comments ({comments.length})</h3>

      <CommentForm onSubmit={addComment} />

      <div className="mt-8 space-y-6">
        {comments.map((c) => (
          <CommentItem key={c.id} comment={c} />
        ))}
      </div>
    </div>
  );
}
