import React from "react";
import EventCategory from "@/src/components/events/EventCategory";

const CategoryPage = ({ data, pageName }) => {
  return <EventCategory data={data} pageName={pageName} />;
};

export default CategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");

  const paths = events_categories.map((event) => {
    return {
      params: { category: event.id.toString() },
    };
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params?.category;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((event) => event.city === id);
  console.log(data);
  return {
    props: {
      data: data,
      pageName: id,
    },
  };
}
