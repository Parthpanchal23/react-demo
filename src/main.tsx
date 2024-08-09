import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page.tsx";
import Layout from "./Layout.tsx";
import {
  Contact,
  PasswordGenerator,
  CurrenctConvertor,
  User,
  Profile,
} from "./component/index.tsx";
// import Loading from "./component/loading.tsx";
import Login from "./component/login.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "/currency",
//         element: <CurrenctConvertor />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "/password",
//         element: <PasswordGenerator />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//         errorElement: <ErrorPage />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} errorElement={<ErrorPage />} />
      <Route
        path="/currency"
        element={<CurrenctConvertor />}
        errorElement={<ErrorPage />}
      />
      <Route path="/login" element={<Login />} errorElement={<ErrorPage />} />
      <Route
        path="/profile"
        element={<Profile />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/password"
        element={<PasswordGenerator />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/contact"
        element={<Contact />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="user/:userid"
        element={<User />}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
