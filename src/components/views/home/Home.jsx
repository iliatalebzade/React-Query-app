import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
      <h1 className="font-semibold text-4xl">
        welcome to <span className="font-bold text-blue-600">UselessTabs</span>
      </h1>
      <p className="font-bold font-mono">
        An app with absolutely no usage for anyone in the world!
      </p>
    </div>
  );
};

export default Home;
