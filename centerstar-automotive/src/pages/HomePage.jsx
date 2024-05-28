import React from "react";
import Card from "../components/Card";

function HomePage() {
  return (
    <div className="w-full sm:w-[50%] bg-bg-grey-color bg-opacity-50">
      <h1 className="font-inria font-bold text-white pt-16 pb-6 text-3xl sm:text-5xl text-center">
        Mercedes Benz Specialist
      </h1>

      {/* First row of cards */}
      <div className="flex justify-center pt-8 space-x-4"> {/* Added space-x-4 for horizontal spacing */}
        <Card />
        <div className="px-2"></div> {/* Added horizontal padding */}
        <Card />
        <div className="px-2"></div> {/* Added horizontal padding */}
        <Card />
      </div>

      {/* Second row of cards */}
      <div className="flex justify-center pt-8 space-x-4"> {/* Added space-x-4 for horizontal spacing */}
        <Card />
        <div className="px-2"></div> {/* Added horizontal padding */}
        <Card />
        <div className="px-2"></div> {/* Added horizontal padding */}
        <Card />
      </div>
    </div>
  );
}

export default HomePage;
