import dateFormat from "@lib/utils/dateFormat";

export default function CommentItem({ comment }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 font-bold">
          {comment.name?.charAt(0)}
        </div>

        <div>
          <p className="font-semibold">{comment.name}</p>
          <p className="text-xs text-gray-500">{dateFormat(comment.date)}</p>

          <p className="mt-2">{comment.comment}</p>

          {comment.pending && (
            <p className="mt-2 text-sm text-yellow-600">
              Your comment is awaiting moderation.
            </p>
          )}

          <button className="mt-2 text-sm text-primary">Reply</button>
        </div>
      </div>
    </div>
  );
}
