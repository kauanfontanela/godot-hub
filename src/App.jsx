import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import ProjectPage from "./routes/ProjectPage.jsx"
import VersionPage from "./routes/VersionPage.jsx"
import CommunityPage from "./routes/CommunityPage.jsx"
import LoginPage from "./routes/LoginPage.jsx"
import HomePage from "./routes/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/projects",
        element: <ProjectPage />
      },
      {
        path: "/versions",
        element: <VersionPage />
      },
      {
        path: "/community",
        element: <CommunityPage />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
