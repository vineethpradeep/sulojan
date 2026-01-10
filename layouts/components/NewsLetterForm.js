import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const resetForm = () => setEmail("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      if (onValidated) {
        onValidated({ EMAIL: email });
        resetForm();
      }
    }
  };

  return (
    <>
      <form action="#" className="py-6" onSubmit={handleSubmit}>
        {/* WRAPPER div for relative positioning */}
        <div className="relative w-full">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="
              form-input relative z-0 h-12 w-full
              rounded-3xl border-none bg-theme-light px-5 pr-12
              text-dark placeholder:text-xs dark:bg-darkmode-theme-dark
            "
          />

          {/* ICON */}
          <FaEnvelope
            className="
              pointer-events-none absolute right-4 top-1/2
              z-10 -translate-y-1/2 text-xl
              text-dark/60
              dark:text-white/60
            "
          />
        </div>

        <button className="btn btn-primary mt-4 block w-full" type="submit">
          Sign In
        </button>
      </form>

      {status === "sending" && (
        <div className="mt-4 text-primary">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mt-4 text-red-700"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div className="mt-4 text-green-700">Subscribed!</div>
      )}
    </>
  );
}

export default CustomForm;
