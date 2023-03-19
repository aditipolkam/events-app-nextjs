import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((event) => {
          return (
            <Link
              key={event.id}
              href={`/events/${event.city}/${event.id}`}
              passHref={true}
            >
              <Image
                src={event.image}
                height={200}
                width={200}
                alt={event.title}
              />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
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
