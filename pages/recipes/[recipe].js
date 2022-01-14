import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InfoRecipe from "../../src/components/inforecipe/InfoRecipe";
import axios from "axios";

export default function Recipe() {
  const { query } = useRouter();
  const { recipe } = query;
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          `https://api.spoonacular.com/recipes/${recipe}/information?fillIngredients=true&analyzeInstructions&apiKey=${process.env.NEXT_PUBLIC_API_KEY_1}`
        );
        return (
          setData(response.data),
          setStep(response.data.analyzedInstructions[0].steps)
        );
      } catch (error) {
        return console.log(error);
      }
    })();
  }, [recipe]);
  const [step, setStep] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="p-3">
      <InfoRecipe step={step} data={data} />
    </div>
  );
}
