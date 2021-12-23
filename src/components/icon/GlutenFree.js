import React, { useState } from "react";
import Image from "next/image";

export default function GlutenFree({ gluten }) {
  return (
    <div className="flex-col justify-center w-1/3">
      <div className="flex justify-center">
        <div className="w-10">
          <Image
            src={`/Image/${gluten == true ? "sin-gluten.svg" : "gluten.svg"}`}
            alt="GlutenFree"
            layout="responsive"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
