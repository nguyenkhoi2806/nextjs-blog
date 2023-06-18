interface Blog {
  title: string;
  introduce: string;
  createdDate: string;
  content: string;
  image: string;
  user: {
    name: string;
  };
  slug: string;
}

export default Blog;
