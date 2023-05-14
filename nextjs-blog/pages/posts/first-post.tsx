import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Layout from "../../components/layout";

const FirstPost: FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>最初の投稿</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
};

export default FirstPost;
