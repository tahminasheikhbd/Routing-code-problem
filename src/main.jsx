/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import ServicePage from "./pages/Service.jsx";
import ContactPage from "./pages/Contact.jsx";
import NotfoundPage from "./pages/Notfound.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import BlogPage from "./pages/Blog.jsx";
import SinglePost from "./pages/Singlepost.jsx";
import { getData } from "./utils/index.js";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async ({ request }) => {
          console.log({ request });
          const url = new URL(request.url);
          const page = url.searchParams.get("page") || 1;
          const limit = url.searchParams.get("limit") || 10;
          console.log({ page, limit });

          return await getData(
            `https://dummyjson.com/posts?limit=${limit}&skip=${
              limit * (page - 1)
            }`
          );
        },
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "blog",
        children: [
          { index: true, element: <BlogPage /> },
          {
            path: ":id",
            element: <SinglePost />,
            loader: async (params) => {
              return await getData(`https://dummyjson.com/posts/${params.id}`);
            },
          },
        ],
      },
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotfoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
