import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#181729]"
    >
      <h1 className=" text-4xl font-bold text-center text-emerald-600">
        Contact
      </h1>
      <form
        action=""
        method="POST"
        encType="multipart/form-data"
        className=" text-white"
      >
        <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
          <div className=" flex flex-col">
            <label className=" uppercase text-sm py-2">Name</label>
            <input
              type="text"
              name="name"
              className=" border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" uppercase text-sm py-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              className=" border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
        </div>

        <div className=" flex flex-col py-2">
          <label className=" uppercase text-sm py-2">Email</label>
          <input
            type="email"
            name="email"
            className=" border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className=" flex flex-col py-2">
          <label className=" uppercase text-sm py-2">Subject</label>
          <input
            type="text"
            name="subject"
            className=" border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className=" flex flex-col py-2">
          <label className=" uppercase text-sm py-2">Message</label>
          <textarea
            name="message"
            rows="10"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          ></textarea>
        </div>
        <button className=" bg-[#011b5e]  text-gray-100 w-full rounded-lg p-4 mt-4">
          Send Message
        </button>
      </form>
      <div className="flex justify-center gap-6 pt-6 mt-2 w-full bg-slate-500">
        <a href="https://github.com/TessFanny" target="blank">
          <FaGithub className="cursor-pointer" size={25} color="" />
        </a>
        <a href="https://www.linkedin.com/in/fanny-tessikoue/" target="blank">
          <FaLinkedin className="cursor-pointer" size={25} color="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
