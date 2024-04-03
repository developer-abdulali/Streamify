import React from "react";
import Layout from "./layout/Layout";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Layout />
      <Toaster
        theme="dark"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />
    </div>
  );
};

export default App;
