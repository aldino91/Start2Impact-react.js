import Image from "next/image";
import { map } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, selectData } from "../store/slices/ListRecipes";
import Link from "next/link";

export default function Recipes() {
  const [params, setParams] = useState("");

  const data = useSelector(selectData);

  const list = data.results;

  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(fetchRecipes(params));
  }

  function changeParams(e) {
    setParams(e.target.value);
  }

  return (
    <div className="p-2">
      <form onSubmit={onSubmit} className="">
        <div className="flex justify-center">
          <select
            onChange={changeParams}
            className="p-1 mr-2 text-white bg-green-600 rounded-md hover:bg-green-500"
          >
            <option>Rice</option>
            <option>Salad</option>
            <option>Legumes</option>
            <option>Pasta</option>
            <option>Fruit</option>
            <option>Vegetable</option>
            <option>Cereals</option>
            <option>Nuts</option>
            <option>Bread</option>
          </select>

          <button
            type="submit"
            className="p-1 ml-2 text-white bg-green-600 rounded-md hover:bg-green-500"
          >
            Send
          </button>
        </div>
      </form>
      <div className="grid w-auto grid-cols-2 gap-4 pt-5 md:grid-cols-3 lg:grid-cols-4">
        {map(list, (lista, i) => (
          <Link href={`/recipes/${i}`} key={i}>
            <a>
              <div className="h-auto bg-white rounded-md shadow-lg">
                <div className="p-2">
                  <Image
                    src={`${lista.image}`}
                    alt={`Immagine${lista.title}`}
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                  <p className="overflow-hidden text-xs font-light text-center lg:text-xl">{`${lista.title}`}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
