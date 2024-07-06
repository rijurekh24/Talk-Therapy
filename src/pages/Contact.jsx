import React from "react";

const Contact = () => {
  return (
    <section className="my-10">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>

        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input mt-1 bg-orange-50 outline-none border-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="write the subject or title"
              className="form__input mt-1 bg-orange-50 outline-none border-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              id="message"
              placeholder="your message here"
              className="form__input mt-1 bg-orange-50 outline-none border-none"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit bg-orange-950">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
