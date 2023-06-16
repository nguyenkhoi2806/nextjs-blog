import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Head from "next/head";
import HomeBg from "@/assets/img/home-bg.jpg";
import BlogItem from "@/components/BlogItem";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Clean blog - contact</title>
      </Head>
      <Header
        text="Clean Blog"
        subText="A Clean Blog Theme by Start Bootstrap"
        background={HomeBg}
      />
      <div className="container">
        <div className="row">
          <BlogItem />
        </div>
      </div>
    </>
  );
}
