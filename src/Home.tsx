import React from "react";
import TestThing from "./Test";
import Things from "./components/Things";

function Home() {
  return (
    <>
      <h1>Razzle TS</h1>
      <TestThing />
      <p>It works 🎉</p>
      <Things />
    </>
  );
}

export default Home;
