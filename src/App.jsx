import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import ProjectPage from "./routes/ProjectPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/projects",
        element: <ProjectPage />
      }
    ],
  },
]);

// export default
function App() {
  return <RouterProvider router={router} />;
}

export default App;
