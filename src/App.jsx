import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import ProjectPage from "./routes/ProjectPage.jsx"
import VersionPage from "./routes/VersionPage.jsx"
import CommunityPage from "./routes/CommunityPage.jsx"
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
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

// export default
function App() {
  return <RouterProvider router={router} />;
}

export default App;
