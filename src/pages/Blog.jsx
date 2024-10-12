/** @format */

import React, { useEffect, useState } from "react";
import { getData } from "../utils/index";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 12;
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const data = await getData(
        `https://dummyjson.com/posts?limit=${limit}&skip=${limit * (page - 1)}`
      );

      const pages = Math.ceil(data.total / limit);
      console.log(data);
      setPosts(data.posts);
      setTotalPage(pages);
    };
    getPost();
  }, [posts]);

  return (
    <div className='container py-8 flex flex-col gap-4'>
      <div className='grid grid-cols-4 gap-4'>
        {posts?.map((post) => (
          <div
            key={post?.id + "-post"}
            className='bg-purple-300 rounded-md border shadow-sm flex flex-col gap-3 p-4 h-full'>
            <h2 className='font-medium text-lg text-teal-900'>
              {post.id}. {post?.title}
            </h2>
            <p className='text-zinc-800 leading-relaxed'>{post?.body}</p>
            <Link
              to={`/blog/${post.id}`}
              className='text-white bg-purple-950 text-center mt-auto px-6 py-3 rounded-md'>
              Read more
            </Link>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-3'>
        <button
          disabled={page <= 1}
          onClick={() => setPage((crr) => crr - 1)}
          className='text-white bg-black font-medium px-6 py-3 rounded-md disabled:opacity-50'>
          Prev
        </button>
        <p>Page:{page}</p>
        <button
          disabled={page >= totalPage}
          onClick={() => setPage((crr) => crr + 1)}
          className='text-white bg-black font-medium px-6 py-3 rounded-md disabled:opacity-50'>
          next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
