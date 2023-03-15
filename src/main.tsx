import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content1 from "./routes/content1";
import Content2 from "./routes/content2";
import Content3 from "./routes/content3";
import Content4 from "./routes/content4";
import Content5 from "./routes/content5";
import "./index.css";

import Root from "./routes/root";
import ErrorPage from "./error-page";

// import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      //   { index: true, element: <Index /> },
      {
        path: "content1",
        element: <Content1 />,
      },
      {
        path: "content2",
        element: <Content2 />,
      },
      {
        path: "content3",
        element: <Content3 />,
      },
      {
        path: "content4",
        element: <Content4 />,
      },
      {
        path: "content5",
        element: <Content5 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
