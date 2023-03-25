import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="data:image/jpeg;base64,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"></img>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
