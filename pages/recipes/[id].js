import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectData } from "../../src/store/slices/ListRecipes";
import Image from "next/image";
import Clock from "../../src/components/icon/Clock";
import Person from "../../src/components/icon/Person";
import GlutenFree from "../../src/components/icon/GlutenFree";
import { map } from "lodash";

export default function Id() {
  const data = useSelector(selectData);
  const result = data.results;
  const router = useRouter();
  const { id } = router.query;
  console.log(result[id]);
  const title = result[id].title;
  const image = result[id].image;
  const time = result[id].readyInMinutes;
  const pax = result[id].servings;
  const gluten = result[id].glutenFree;
  const ingredient = result[id].missedIngredients;
  const step = result[id].analyzedInstructions[0].steps;

  return (
    <div className="p-3 md:p-6">
      <div className="p-0 border-0 border-green-600 rounded-md shadow-none md:shadow-2xl md:border-2 md:p-4">
        <div className="flex flex-col justify-around p-4 mt-2 bg-gray-300 bg-opacity-25 rounded-md md:flex-row md:mt-7">
          <div className="w-full md:w-96">
            <Image
              src={`${image}`}
              alt={`Immagine${title}`}
              layout="responsive"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="w-full px-2 mt-2 text-center md:w-1/2 md:mt-0">
            <h1 className="text-2xl">{title}</h1>
            <div className="flex justify-around p-1 mt-3 bg-gray-300 rounded-md bg-opacity-40">
              <Clock time={time} />
              <Person pax={pax} />
              <GlutenFree gluten={gluten} />
            </div>
            <div className="p-2 text-left">
              <h2 className="mt-3 font-bold text-md">Ingredient</h2>
              {map(ingredient, (data, i) => (
                <ul>
                  <li key={i}>-{data.original}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full p-0 mt-3 bg-gray-300 bg-opacity-25 rounded-md md:p-3">
          <div className="p-2 m-2 md:p-4">
            {map(step, (data, i) => (
              <ul>
                <li key={i}>
                  <div className="mb-2 border-b-2 border-gray-400">
                    <p className="underline">Step {i + 1}</p>
                    <p>{data.step}</p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
