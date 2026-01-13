import { useState } from "react";
import { markdownify } from "@lib/utils/textConverter";
import { BsArrowRightShort } from "react-icons/bs";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action } = frontmatter;

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   const form = e.target;
  //   const formData = new FormData(form);

  //   try {
  //     const res = await fetch(form_action, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (res.ok) {
  //       setSubmitted(true);
  //       form.reset();
  //     } else {
  //       setError("Failed to send message. Please try again.");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setError("An error occurred. Please try again.");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission without fetch
    setTimeout(() => {
      setSubmitted(true);
      e.target.reset();
    }, 300);
  };
  return (
    <section className="section lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <ImageFallback
            className="absolute -z-[1] object-cover object-top"
            src={"/images/map.svg"}
            fill={true}
            alt="map bg"
            priority={true}
          />
          <div className="lg:col-6">
            {markdownify(
              title,
              "h1",
              "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]"
            )}
          </div>
          <div className="contact-form-wrapper rounded border border-border p-6 lg:col-6 dark:border-darkmode-border">
            <h2>
              Send Us A
              <span className="ml-1.5 inline-flex items-center text-primary">
                Message
                <BsArrowRightShort />
              </span>
            </h2>

            {submitted ? (
              <div className="mt-6 rounded bg-green-100 p-4 text-green-800">
                Thank you for contacting us! We will get back to you soon.
              </div>
            ) : (
              <>
                {error && (
                  <div className="mt-4 rounded bg-red-100 p-3 text-red-800">
                    {error}
                  </div>
                )}
                <form
                  className="contact-form mt-12"
                  method="POST"
                  action={form_action}
                  onSubmit={handleSubmit}
                >
                  <div className="mb-6">
                    <label className="mb-2 block font-secondary" htmlFor="name">
                      Full name
                      <small className="font-secondary text-sm text-primary">
                        *
                      </small>
                    </label>
                    <input
                      className="form-input w-full placeholder:text-gray-400 placeholder:opacity-50"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block font-secondary"
                      htmlFor="email"
                    >
                      Email Address
                      <small className="font-secondary text-sm text-primary">
                        *
                      </small>
                    </label>
                    <input
                      className="form-input w-full placeholder:text-gray-400 placeholder:opacity-50"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block font-secondary"
                      htmlFor="subject"
                    >
                      Subject
                      <small className="font-secondary text-sm text-primary">
                        *
                      </small>
                    </label>
                    <input
                      className="form-input w-full placeholder:text-gray-400 placeholder:opacity-50"
                      name="subject"
                      type="text"
                      placeholder="Enter the subject"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block font-secondary"
                      htmlFor="message"
                    >
                      Your Message Here
                      <small className="font-secondary text-sm text-primary">
                        *
                      </small>
                    </label>
                    <textarea
                      className="form-input w-full placeholder:text-gray-400 placeholder:opacity-50"
                      name="message"
                      placeholder="Enter your message here"
                      rows="7"
                      required
                    />
                  </div>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Send Now"
                  />
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
