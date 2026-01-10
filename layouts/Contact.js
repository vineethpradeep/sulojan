import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;

  return (
    <section className="section lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <ImageFallback
            className="absolute -z-[1] object-cover object-top"
            src={"/images/map.svg"}
            fill="true"
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
            <form
              className="contact-form mt-12"
              method="POST"
              action={form_action}
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
                <label className="mb-2 block font-secondary" htmlFor="email">
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
                <label className="mb-2 block font-secondary" htmlFor="subject">
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
                <label className="mb-2 block font-secondary" htmlFor="message">
                  Your Message Here
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <textarea
                  className="form-input w-full placeholder:text-gray-400 placeholder:opacity-50"
                  placeholder="Enter your message here"
                  rows="7"
                />
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Send Now"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
