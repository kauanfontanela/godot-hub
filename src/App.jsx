import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import ProjectPage from "./routes/ProjectPage.jsx"
import VersionPage from "./routes/VersionPage.jsx"
import CommunityPage from "./routes/CommunityPage.jsx"

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
