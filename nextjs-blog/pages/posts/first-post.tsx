import Link from "next/link";
import { FC } from "react";

const FirstPost: FC = () => {
  return (
    <>
      <h1>最初の投稿</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
};

export default FirstPost;
