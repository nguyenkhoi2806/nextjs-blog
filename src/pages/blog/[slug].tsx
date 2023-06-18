import Header from "@/components/Header";
import Blog from "@/models/blog";

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = (props: BlogDetailProps) => {
  const { blog } = props;
  const image = require("@/assets/img/" + blog.image);

  if (!blog) {
    return null;
  }

  return (
    <>
      <Header text={blog.title} subText={blog.introduce} background={image} />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/blog");
  const blogData = await res.json();
  console.log(blogData);
  return {
    paths: blogData.data.map((blog: Blog) => ({
      params: { slug: blog.slug },
    })),
    fallback: true,
  };
}

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch("http://localhost:3000/api/blog/" + params.slug);
  const data = await res.json();
  return {
    props: {
      blog: data.blog,
    },
  };
};

export default BlogDetail;
