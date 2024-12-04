import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/BookList";
import AddBookForm from "../pages/AddBookForm";
import ErrorPage from "../pages/ErrorPage";

export const router = () => {
  return createBrowserRouter(
    [
      {
        path: "/", element: < Root />, errorElement: <ErrorPage />,
        children: 
        [
          {path: "/", element: <List />},
          { path: "/new", element: <AddBookForm /> },
        ],
      }
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
};