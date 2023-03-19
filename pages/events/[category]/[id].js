import React from "react";
import MainEvent from "@/src/components/events/MainEvent";

const EventDetails = ({ event }) => {
  return <MainEvent data={event} />;
};

export default EventDetails;

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
