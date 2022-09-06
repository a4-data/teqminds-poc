import type { NextPage } from "next";
import React from "react";
import { Dashboard } from "../component/Dashboard";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Dashboard />
    </React.Fragment>
  );
};

export default Home;
