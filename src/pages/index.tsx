import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Head from "next/head";
import HomeBg from "@/assets/img/home-bg.jpg";
import BlogItem from "@/components/BlogItem";
import Blog from "@/models/blog";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  blogs: Blog[];
}

export default function Home(props: HomeProps) {
  const { blogs } = props;

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
          {blogs.map((blog) => (
            <BlogItem key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();
  return {
    props: {
      blogs: data.data,
    },
  };
}
