import React from "react";
import Recipes from "./recipes";

export const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-scroll sfondo">
      <h1 className="pt-10 mt-40 font-serif text-5xl text-center text-green-600 md:text-6xl lg:text-7xl">
        Healthyfood
      </h1>
      <h3 className="p-6 font-serif text-3xl text-center text-green-600">
        The Word of Vegetarian
      </h3>
      <Recipes />
    </div>
  );
};
