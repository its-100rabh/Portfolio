import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jl1yeuq",
        "template_viz95ir",
        form.current,
        "aAkf5Pmq3eP42xq4f"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <div className="flex flex-col items-center justify-center relative z-1 px-4 sm:px-0">
        <div className="flex flex-col items-center justify-between w-full max-w-5xl px-4 py-8 sm:px-0 gap-3">
          <h1 className="text-center text-4xl font-bold mt-5 sm:mt-3 text-primary bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-center text-lg max-w-xl text-secondary sm:mt-3 sm:text-base">
            Feel free to reach out to me for any questions or opportunities!
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col w-11/12 max-w-xl bg-card p-8 rounded-xl shadow-md mt-7 gap-3"
          >
            <h2 className="text-2xl mb-1 font-bold text-primary">
              Email Me 🚀
            </h2>
            <input
              className="flex-1 bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg p-3 focus:border-primary"
              placeholder="Your Email"
              name="from_email"
            />
            <input
              className="flex-1 bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg p-3 focus:border-primary"
              placeholder="Your Name"
              name="from_name"
            />
            <input
              className="flex-1 bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg p-3 focus:border-primary"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="flex-1 bg-transparent border border-secondary outline-none text-lg text-primary rounded-lg p-3 focus:border-primary"
              placeholder="Message"
              rows="4"
              name="message"
            />
            <input
              className="w-full text-center bg-gradient-to-r from-purple-500 to-pink-500 py-3 mt-1 rounded-lg border-none text-primary text-lg font-bold cursor-pointer"
              type="submit"
              value="Send"
            />
          </form>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
