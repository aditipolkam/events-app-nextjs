import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      <h1>Events</h1>
      {data.map((event) => (
        <Link
          className="card"
          key={event.id}
          href={`/events/${event.id}`}
          passHref={true}
        >
          <div className="image">
            <Image
              width={400}
              height={300}
              alt={event.title}
              src={event.image}
            />
          </div>
          <div className="content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
