import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

const MainEvent = ({ data }) => {
  const [message, setMessage] = useState("");
  const inputEmail = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, eventId }),
      });
      console.log(response);
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message);
        throw new Error("Something went wrong!");
      }

      setMessage(data.message);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <form onSubmit={handleSubmit} className="email_registration">
        <label>Get registered for this event!</label>
        <input type="email" id="email" ref={inputEmail} placeholder="Email" />
        <button type="submit"> Register </button>
      </form>
      {message}
    </div>
  );
};

export default MainEvent;
