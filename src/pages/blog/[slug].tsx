import { useRouter } from "next/router";

import Header from "@/components/Header";
import Blog from "@/models/blog";
import Data from "../data.json";

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = (props: BlogDetailProps) => {
  const { blog } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const image = require("@/assets/img/" + blog.image);

  return (
    <>
      <Header
        text={blog.title}
        subText={blog.introduce}
        background={image.default}
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 text-justify"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: Data.map((blog: Blog) => ({
      params: { slug: blog.slug },
    })),
    fallback: true,
  };
}

export const getStaticProps = async ({ params }: any) => {
  return {
    props: {
      blog: Data.find((blog) => (blog.slug = params.slug)),
    },
    revalidate: 5000,
  };
};

export default BlogDetail;
