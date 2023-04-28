import React, { useContext } from "react";
import { create } from "../../hooks/create";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";

const ContactForm = () => {
  const { emailRefetch } = useContext(GLOBAL_CONTEXT);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.fname.value + " " + event.target.lname.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };
    console.log(data);

    create({
      endPoint: "email",
      data: data,
      reset: event.target.reset(),
      refetch: emailRefetch,
      message: "Message Send Successfully!",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="transform translate-y-[-5rem] bg-white"
    >
      <div className="p-10 shadow border flex flex-col gap-y-5">
        <h1 className="text-3xl font-extrabold">Leave A Message</h1>

        <div className="flex justify-between items-center gap-2 ">
          <input
            name="fname"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs rounded-none"
            required
          />
          <input
            name="lname"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs rounded-none"
            required
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-none"
            required
          />
        </div>
        <div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full rounded-none"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full  rounded-none"
            placeholder="Message"
            required
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="border-2 max-w-[10rem]  border-[#EBA830] px-3 py-2 uppercase text-[#EBA830] hover:text-white hover:bg-[#EBA830]  duration-300"
        >
          send message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
