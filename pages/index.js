import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomePage from "@/src/components/home/HomePage";
import Footer from "@/src/components/footer/Footer";
import Header from "@/src/components/header/Header";
import MainLayout from "@/src/components/layout/MainLayout";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { events_categories } = await import("/data/data.json");
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
