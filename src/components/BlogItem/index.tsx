import Blog from "@/models/blog";
import Link from "next/link";

interface InterfaceBlog {
  blog: Blog;
}

const BlogItem = (props: InterfaceBlog) => {
  const { blog } = props;
  return (
    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
      <div className="post-preview">
        <Link href={"/blog/" + blog.slug}>
          <h2 className="post-title">{blog.title}</h2>
          <h3 className="post-subtitle">{blog.introduce}</h3>
        </Link>
        <p className="post-meta">
          Posted by <a href="#">{blog.user.name}</a> on {blog.createdDate}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
