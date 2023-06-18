import Blog from "@/models/blog";
import type { NextApiRequest, NextApiResponse } from "next";

import dataBlog from "../data.json";

interface Data {
  message?: string;
  blog?: Blog;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
  const blog = dataBlog.find((blog) => blog.slug === slug);
  if (!blog) {
    res.status(404).json({
      message: " Blog Not found",
    });
  }

  res.status(200).json({ blog });
}
