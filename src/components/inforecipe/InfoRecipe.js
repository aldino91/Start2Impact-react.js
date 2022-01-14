import React from "react";
import Image from "next/image";
import Clock from "../icon/Clock";
import Person from "../icon/Person";
import GlutenFree from "../icon/GlutenFree";
import { map } from "lodash";

export default function InfoRecipe({ step, data }) {
  const { title, image } = data;
  const time = data.readyInMinutes;
  const pax = data.servings;
  const gluten = data.glutenFree;
  const ingredient = data.extendedIngredients;
  return (
    <div className="p-0 border-0 border-green-600 rounded-md shadow-none md:shadow-2xl md:border-2 md:p-3">
      <div className="flex flex-col justify-around p-4 mt-2 bg-gray-300 bg-opacity-25 rounded-md md:flex-row">
        <div className="w-full md:w-96">
          {image ? (
            <Image
              src={`${image}`}
              alt={`Immagine${title}`}
              layout="responsive"
              width={100}
              height={100}
              className="rounded-md"
            />
          ) : null}
        </div>
        <div className="w-full px-2 mt-2 text-center md:w-1/2 md:mt-0">
          <h1 className="text-2xl">{title}</h1>
          <div className="flex justify-around p-1 mt-3 bg-gray-300 rounded-md bg-opacity-40">
            <Clock time={time} />
            <Person pax={pax} />
            <GlutenFree gluten={gluten} />
          </div>
          <div className="p-2 text-left">
            <h2 className="mt-3 font-bold text-md">Ingredients</h2>
            {map(ingredient, (data, i) => (
              <ul key={i}>
                <li>
                  <div className="border-b-2 border-gray-300">
                    <p>
                      {data.measures.metric.amount}{" "}
                      {data.measures.metric.unitShort} {data.originalName}
                    </p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-0 mt-3 bg-gray-300 bg-opacity-25 rounded-md md:p-3">
        <h2 className="font-bold text-center text-md">Preparation</h2>
        <div className="p-2 m-2 md:p-4">
          {map(step, (data, i) => (
            <div key={i} className="mb-3 border-b-2 border-gray-300">
              <p className="underline">Step {data.number}</p>
              <p>{data.step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
