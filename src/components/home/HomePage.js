import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const HomePage = ({ data }) => {
  return (
    <main className={styles.main}>
      <h1>Events</h1>
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`} passHref={true}>
          <Image width={200} height={200} alt={event.title} src={event.image} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
