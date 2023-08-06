import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Features from "./pages/Features";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

//layouts
import RootLayout from "../src/layouts/RootLayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Stories" element={<Stories />} />
      <Route path="features" element={<Features />} />
      <Route path="pricing" element={<Pricing />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
