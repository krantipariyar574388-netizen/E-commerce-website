import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.tsx";
import Home from "./components/Home/Home.tsx";
import Contact from "./components/Contact/Contact.tsx";
import About from "./components/About/About.tsx";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext.tsx";
import Login from "./components/Auth/Login.tsx";
import Register from "./components/Auth/Register.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<Register />} />
      <Route path="login" element={<Login />} />

    </Route>
  )
);

// ✅ FIX HERE
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);