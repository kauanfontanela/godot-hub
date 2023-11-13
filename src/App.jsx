import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/electron-vite.animate.svg'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [],
  },
]);

// export default
function App() {
  return <RouterProvider router={router} />;
}

export default App;
