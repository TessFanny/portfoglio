import React, { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export const SendEmail = () => {
  const form = useRef();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();
    if(name == " " && email == " " && message== ""){
       return toast.error('Veuillez renseigner tous les champs')
    }
    emailjs
      .sendForm(
        "service_y0qrtet",
        "template_76f7rv5",
        form.current,
        "SByXvlMCLNYyCnfLV"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(`votre message a bien été envoyé`);
        },
        (error) => {
          console.log(error.text);
          toast.error("message not send");
        }
      );
      setName('')
      setEmail('')
      setMessage('')
  };

  return (
    <form ref={form} onSubmit={sendEmail} className=" ">
      <div className=" flex flex-col py-2">
        <label className="uppercase text-sm py-1">votre nom:</label>
        <input
          type="text"
          name="from_name"
          value={name}
          required
          onChange={(e)=> setName(e.target.value)}
          className="border-2 rounded-lg p-1 flex border-gray-300 text-black"
          placeholder='Ex: John Doe'
        />
      </div>

      <div className=" flex flex-col py-2">
        <label className=" uppercase text-sm py-1" > votre Email:</label>
        <input
          type="email"
          name="user_email"
          value={email}
          required
          onChange={(e)=> setEmail(e.target.value)}
          className=" border-2 rounded-lg p-1 flex border-gray-300 text-black"
          placeholder='example@example.com'
        />
      </div>

      <div className=" flex flex-col py-2">
        <label className=" uppercase text-sm py-1"> votre Message:</label>
        <textarea
          name="message"
          rows="6"
          value={message}
          required
          onChange={(e)=> setMessage(e.target.value)}
          placeholder='Votre message...'
          className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
        />
        <input type="submit" value="ENVOYER"className=" w-full bg-transparent mt-3 text-emerald-600 border-[1px] border-emerald-600 px-4 py-2 text-md font-semibold rounded-md hover:bg-emerald-600 hover:scale-102  hover:text-[#181729] duration-300 delay-200 ease-in-out" />
        <ToastContainer position="top-center" />
      </div>
      
    </form>
  );
};
