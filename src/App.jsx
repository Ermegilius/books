import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/appRoutes.jsx";
import './App.css'

function App() {
  const createRoutes = router();

  return (
    <RouterProvider
      router={createRoutes}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
