/** @format */

import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getData } from "../utils";

const SinglePost = () => {
  const post = useLoaderData();
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const getPost = async () => {
  //     const data = await getData(`https://dummyjson.com/posts/${params?.id}`);
  //     if (data?.id) {
  //       setPost(data);
  //     } else {
  //       setPost(null);
  //     }
  //   };
  //   getPost();
  // }, [params.id]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getData("https://dummyjson.com/posts?limit=4");
      setPosts(data.posts);
    };
    getPost();
  }, [posts]);

  return (
    <div className=''>
      <div className='container py-8'>
        <h2 className='text-2xl text-teal-800 font-medium'>
          {post?.id}.{post?.title}
        </h2>

        <p className='leading-relaxed'>{post?.body}</p>
      </div>

      <div className='container'>
        <div className='grid grid-cols-4 gap-4'>
          {posts?.map((post) => (
            <div
              key={post?.id + "-post"}
              className='bg-purple-300 rounded-md border shadow-sm flex flex-col gap-3 p-4'>
              <h2 className='font-medium text-lg text-teal-900'>
                {post?.id}.{post?.title}
              </h2>
              <p className='text-zinc-800 leading-relaxed'>{post?.body}</p>
              <Link
                to={`/blog/${post.id}`}
                className='text-xl font-semibold text-purple-800'>
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
