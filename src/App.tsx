import React from "react";
import { CorbadoProvider } from "@corbado/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Setting";

const PROJECT_ID = import.meta.env.VITE_PUBLIC_CORBADO_PROJECT_ID;

const RouteProvider = () => {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/settings",
      element: <Settings />, // Add the route for the Settings page
    },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
};

function App() {
  return (
    <main>
      <CorbadoProvider projectId={PROJECT_ID} darkMode="on">
        <RouteProvider />
      </CorbadoProvider>
    </main>
  );
}

export default App;
