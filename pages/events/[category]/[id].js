import React from "react";
import Image from "next/image";

const Event = ({ event }) => {
  return (
    <div>
      <Image src={event.image} width={1000} height={500} alt={event.title} />
      <h1>{event.id}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default Event;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;
  const allPaths = allEvents.map((event) => {
    return {
      params: { category: event.city, id: event.id },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { category, id } = context.params;
  const { allEvents } = await import("/data/data.json");
  const event = allEvents.find((event) => event.id === id);
  return {
    props: {
      event,
    },
  };
}
