/** @format */

// /** @format */
// import { useEffect, useState } from "react";
// import { getData } from "../utils/index";
// import { Link, useLoaderData } from "react-router-dom";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { Counter } from "../components/counter";
// import Discloser from "../components/Discloser";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <section className='min-h-screen flex items-center justify-center bg-slate-300 flex-col text-black'>
      {data?.posts?.map((post) => (
        <h1 key={post.id}>
          {post.id}.{post.title}
        </h1>
      ))}
    </section>
  );
};

export default HomePage;
