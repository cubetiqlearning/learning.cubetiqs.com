import UnderContructionView from "../components/UnderContructionView";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSiteStore } from "./../store";
import Loading from "../lib/Loading";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { title, loading, setLoading, setTitle } = useSiteStore(
    (state) => state
  );

  useEffect(() => {
    setTimeout(() => {
      setTitle("Under Construction");
      setLoading(false);
    }, 3000);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | CUBETIQ Learning Group</title>
        <meta
          name="description"
          content="Learners are the improvements from previous..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {loading && <Loading type="default" size="lg" />}
        {!loading && <UnderContructionView />}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.cubetiqs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &copy; {new Date().getFullYear()} &nbsp;<b>CUBETIQ Solution</b>
        </a>
      </footer>
    </div>
  );
};

export default Home;
