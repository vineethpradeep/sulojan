import { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const submit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Date.now(),
      name: form.name,
      date: new Date().toISOString(),
      comment: form.comment,
      pending: true,
    });

    setForm({ name: "", email: "", comment: "" });
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        required
        placeholder="Your name"
        className="form-input w-full"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        required
        type="email"
        placeholder="Your email"
        className="form-input w-full"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        required
        placeholder="Your comment"
        rows="4"
        className="form-textarea w-full"
        value={form.comment}
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      />

      <button className="btn btn-primary">Post Comment</button>
    </form>
  );
}
